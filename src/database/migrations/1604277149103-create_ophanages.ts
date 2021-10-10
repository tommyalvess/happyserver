import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOphanages1604277149103 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'ophanages',
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
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'latitude',
                    type:  'decimal',
                    scale: 10, // depois da virgula
                    precision: 2, // amtes da virgula
                },
                {
                    name: 'longitude',
                    type:  'decimal',
                    scale: 10, // depois da virgula
                    precision: 2 // amtes da virgula
                },
                {
                    name: 'about',
                    type: 'text',
                },
                {
                    name: 'instructions',
                    type: 'text',
                },
                {
                    name: 'opening_hours',
                    type: 'text',
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('ophanages')
    }

}
