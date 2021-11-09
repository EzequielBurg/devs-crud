import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useFetch } from 'use-http';

export interface IDevs {
  id?: string;
  nome: string;
  sexo: string;
  idade: number;
  hobby: string;
  datanascimento: string;
}

type FeedbackMessage = {
  success: boolean;
  message: string;
};

interface IDevsContextData {
  devs: IDevs[];
  singleDev: IDevs;
  findDev: (id: string) => Promise<void>;
  registerDev: (dev: IDevs) => Promise<void>;
  updateDev: (devForUpdate: IDevs) => Promise<void>;
  deleteDev: (id: string) => Promise<void>;
  loading: boolean;
  feedbackMessage: FeedbackMessage;
  showForm: boolean;
  setShowForm: Dispatch<SetStateAction<boolean>>;
}

export const initialDev = {
  nome: '',
  sexo: '',
  idade: 0,
  hobby: '',
  datanascimento: '',
};

const DevsContext = createContext<IDevsContextData>({} as IDevsContextData);

export const UserProvider: React.FC = ({ children }) => {
  const { get, post, put, del, loading, response } =
    useFetch<IDevs[]>('/developers');

  const [devs, setDevs] = useState<IDevs[]>([]);
  const [singleDev, setSingleDev] = useState<IDevs>(initialDev);
  const [showForm, setShowForm] = useState(true);
  const [feedbackMessage, setFeedbackMessage] = useState<FeedbackMessage>({
    success: false,
    message: '',
  });

  const loadDevs = useCallback(async () => {
    await get();
    if (response.ok) {
      setDevs(response.data as IDevs[]);
    }
  }, [get, response]);

  const findDev = useCallback(
    async (id: string) => {
      await get(`/${id}`);
      if (response.ok) {
        setSingleDev(response.data as unknown as IDevs);
      }
    },
    [get, response],
  );

  const registerDev = useCallback(
    async (dev: IDevs) => {
      setShowForm(false);
      await post(dev);
      if (response.ok) {
        const newDev = response.data as unknown as IDevs;
        setFeedbackMessage({
          success: true,
          message: 'Dev cadastrado com sucesso!',
        });
        setDevs(prev => [...prev, newDev]);
      } else {
        setFeedbackMessage({
          success: false,
          message: 'Ocorreu um erro ao cadastrado esse dev :(',
        });
      }
    },
    [post, response],
  );

  const updateDev = useCallback(
    async (devForUpdate: IDevs) => {
      setShowForm(false);
      await put(`/${devForUpdate.id}`, devForUpdate);
      if (response.ok) {
        const updatedDev = response.data as unknown as IDevs;
        setFeedbackMessage({
          success: true,
          message: 'Dev atualizado com sucesso!',
        });
        setDevs(state =>
          state.map(dev => (dev.id === updatedDev.id ? updatedDev : dev)),
        );
      } else {
        setFeedbackMessage({
          success: false,
          message: 'Ocorreu um erro ao atualizar esse dev :(',
        });
      }
    },
    [put, response],
  );

  const deleteDev = useCallback(
    async (id: string) => {
      setShowForm(false);
      await del(`/${id}`);
      if (response.ok) {
        setFeedbackMessage({
          success: true,
          message: 'Dev excluído com sucesso!',
        });
        setDevs(state => state.filter(dev => dev.id !== id));
      } else {
        setFeedbackMessage({
          success: false,
          message: 'Ocorreu um erro ao excluir esse dev :(',
        });
      }
    },
    [del, response],
  );

  useEffect(() => {
    loadDevs();
  }, [loadDevs]);

  return (
    <DevsContext.Provider
      value={{
        devs,
        singleDev,
        findDev,
        registerDev,
        updateDev,
        deleteDev,
        loading,
        feedbackMessage,
        showForm,
        setShowForm,
      }}
    >
      {children}
    </DevsContext.Provider>
  );
};

export const useDev = (): IDevsContextData => {
  return useContext(DevsContext);
};
