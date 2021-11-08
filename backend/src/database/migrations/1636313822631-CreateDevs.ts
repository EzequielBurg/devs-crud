import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDevs1636313822631 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "devs",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "nome",
            type: "varchar",
          },
          {
            name: "sexo",
            type: "char",
          },
          {
            name: "idade",
            type: "int",
          },
          {
            name: "hobby",
            type: "varchar",
          },
          {
            name: "datanascimento",
            type: "timestamp",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("devs");
  }
}
