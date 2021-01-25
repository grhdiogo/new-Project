import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createAdress1611030944678 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"adress",
            columns:[
                {
                    name:'id',
                    type:'integer',
                    unsigned:true,
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy:'increment',
                },
                {
                    name:'number',
                    type:'integer'
                },
                {
                    name:'complement',
                    type:'varchar'
                },
                {
                    name:'cep',
                    type:'integer'
                },
                {
                    name:'user',
                    type:'integer'
                },

            ],
            foreignKeys:[
                {
                    name:'cepId',
                    columnNames:['cep'],
                    referencedTableName:'cep',
                    referencedColumnNames:['id'],
                    onDelete:'CASCADE',
                    onUpdate:'CASCADE'
                },
                {
                    name:'userId',
                    columnNames:['user'],
                    referencedTableName:'user',
                    referencedColumnNames:['id'],
                    onDelete:'CASCADE',
                    onUpdate:'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('adress')
    }

}
