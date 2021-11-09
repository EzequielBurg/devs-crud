import React from 'react';
import { Spinner, Text, Center, Flex } from '@chakra-ui/react';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';

interface ICrudFeedbackProps {
  loading: boolean;
  feedbackMessage: {
    success: boolean;
    message: string;
  };
}

export const CrudFeedback: React.FC<ICrudFeedbackProps> = ({
  loading,
  feedbackMessage,
}) => {
  return (
    <Center padding="30px">
      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <>
          {feedbackMessage.success ? (
            <Flex direction="column" align="center">
              <FiCheckCircle color="#8CC63F" size={80} />
              <Text fontSize="2xl">{feedbackMessage.message}</Text>
            </Flex>
          ) : (
            <>
              <FiXCircle color="#C53030" size={80} />
              <Text fontSize="2xl">{feedbackMessage.message}</Text>
            </>
          )}
        </>
      )}
    </Center>
  );
};
