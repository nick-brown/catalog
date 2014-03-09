<?php

class ProductsTableSeeder extends Seeder {

	public function run()
	{
        DB::table('products')->delete();

        Product::create([
            'name' => 'Name of the Wind',
            'description' => 'The first book in Patrick Rothfuss\'s Kingkiller Chronicles trilogy',
            'width' => 8.2,
            'length' => 5.4,
            'height' => 1.3,
            'usd_value' => 13.99
        ]);

        Product::create([
            'name' => 'Wise Man\'s Fear',
            'description' => 'The second book in Patrick Rothfuss\'s Kingkiller Chronicles trilogy',
            'width' => 8.2,
            'length' => 9.4,
            'height' => 1.3,
            'usd_value' => 16.99
        ]);

        Product::create([
            'name' => 'Dune',
            'description' => 'Frank Herbert\'s masterpiece about the planet Arrakis',
            'width' => 4.6,
            'length' => 7.4,
            'height' => 0.8,
            'usd_value' => 5.99
        ]);
	}

}