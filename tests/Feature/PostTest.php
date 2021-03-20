<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Tests\TestCase;

class PostTest extends TestCase
{
    use WithoutMiddleware;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testGetAllPosts()
    {
        $response = $this->get('/api/posts');

        $response->assertJsonStructure(["posts"]);

        $response->assertStatus(200);
    }

}
