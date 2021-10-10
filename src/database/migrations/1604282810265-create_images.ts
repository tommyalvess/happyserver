import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1604282810265 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns: [
                {
                    name: 'id', // id do item 
                    type: 'integer',
                    unsigned: true, // não pode ser negativo, sempre possitivo o numero
                    isPrimary: true, // ela pe a cgave identificadora
                    isGenerated: true, // gerada auto 
                    generationStrategy: 'increment' ,
                },
                {
                    name: 'path',
                    type: 'varchar',
                },
                {
                    name: 'ophanages_id',
                    type: 'integer'
                },
            ],
            foreignKeys: [
                {
                    name: 'imageOrphanage',
                    columnNames: ['ophanages_id'],
                    referencedTableName: 'ophanages',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',// alterar imgs relacionadas
                    onDelete: 'CASCADE', //deletar as imgs relacionas 
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images')
    }

}
