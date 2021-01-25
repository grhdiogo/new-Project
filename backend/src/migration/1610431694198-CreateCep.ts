import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCep1610431694198 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'cep',
            columns:
            [
                {
                    name:'id',
                    type:'integer',
                    unsigned:true,
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy:'increment',
                },
                {
                    name:'country',
                    type:'varchar'
                },
                {
                    name:'street',
                    type:'varchar'
                },
                {
                    name:'zone',
                    type:'varchar'
                },
                {
                    name:'zipcode',
                    type:'varchar'
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('cep')
    }

}
