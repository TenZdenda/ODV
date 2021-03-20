<?php

use Illuminate\Database\Seeder;

class FaqSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faq = new \App\Faq();

        $faq->question = "What is the meaning of Lorem ipsum?";
        $faq->answer = "Literally it does not mean anything. It is a sequence of words without a sense of Latin derivation that make up a text also known as filler text, fictitious, blind or placeholder";

        $faq->save();
    }

}
