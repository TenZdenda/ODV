<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Tests\TestCase;

class LectureTest extends TestCase
{
    use WithoutMiddleware;

    public function testGetAllLecture()
    {
        $response = $this->get('/api/lectures');

        $response->assertJsonStructure(["lectures"]);

        $response->assertStatus(200);
    }

    public function testGetLecture()
    {
        $response = $this->get('/api/lecture/1');

        $response->assertJsonStructure(["lecture"]);

        $response->assertStatus(200);
    }

    public function testCreateLecture()
    {
        $data = [
            "title" => "Testovací přednáška",
            "company" => "Testovací firma",
            "time" => "10:00",
            "place" => "Učebna 2003",
            "viewers" => 50
        ];

        $response = $this->post('/api/createNewLecture', $data);
        $response->assertStatus(200);
    }

    public function testEditLecture() {
        $data = [
            "title" => "Testovací přednáška",
            "company" => "Testovací firma",
            "time" => "10:00",
            "place" => "Učebna 2003",
            "viewers" => 50
        ];

        $response = $this->post('/api/editLecture/1', $data);

        $response->assertStatus(200);
    }

    public function testDeleteLecture() {
        $response = $this->delete('/api/deleteLecture/2');

        $response->assertStatus(200);
    }

}
