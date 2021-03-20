<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Tests\TestCase;

class RoleTest extends TestCase
{
    use WithoutMiddleware;

    public function testCreate()
    {
        $data = [
            "name" => "tester",
        ];

        $response = $this->post('/api/role', $data);
        $response->assertStatus(200);
    }

    public function testGet()
    {
        $response = $this->get('/api/roles');

        $response->assertJsonStructure(['roles']);
        $response->assertStatus(200);
    }

    public function testDestroy()
    {
        $response = $this->delete('/api/role/1', []);

        $response->assertStatus(200);
    }

}
