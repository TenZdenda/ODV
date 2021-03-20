<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// GET
Route::get('find/{token}', 'ResetPasswordController@find');
Route::get('posts', 'PostController@index');
Route::get('post/{id}', 'PostController@show');
Route::get('partners', 'PartnerController@getPartners');
Route::get('team', 'TeamController@getTeam');
Route::get('faq', 'FaqController@getAllFaq');
Route::get('reference', 'ReferenceController@getReferences');
Route::get('lectures', 'LectureController@getLectures');
Route::get('documents', 'FileController@getDocuments');
Route::get('settings', 'SettingsController@getSettings');

// POST
Route::post('login', 'AuthController@login');
Route::post('register', 'AuthController@register');
Route::post('forgot', 'ResetPasswordController@create');
Route::post('reset', 'ResetPasswordController@reset');
Route::post('email', 'SendMailController@sendEmail');

Route::group(['middleware' => 'auth:api'], function () {

        // GET
        Route::get('user', 'UserController@index');
        Route::get('user/{id}', 'UserController@show');
        Route::get('roles', 'RoleController@index');
        Route::get('stats', 'JoinLectureController@stats');
        Route::get('formatedFaqs', 'FaqController@getFormatedFaqs');
        Route::get('lecture/{id}', 'LectureController@getLecture');
        Route::get('faq/{id}', 'FaqController@getFaq');

        // POST
        Route::post('user', 'UserController@store');
        Route::post('role', 'RoleController@store');
        Route::post('user/{id}', 'UserController@update');
        Route::post('createNewLecture', 'LectureController@createNewLecture');
        Route::post('newPartner', 'PartnerController@savePartner');
        Route::post('editPartner/{id}', 'PartnerController@editPartner');
        Route::post('editLecture/{id}', 'LectureController@editLecture');
        Route::post('addMember', 'TeamController@addTeamMember');
        Route::post('editMember/{id}', 'TeamController@editMember');
        Route::post('addFaq', 'FaqController@addFaq');
        Route::post('editFaq/{id}', 'FaqController@editFaq');
        Route::post('addReference', 'ReferenceController@addReference');
        Route::post('editReference/{id}', 'ReferenceController@editReference');
        Route::post('uploadDocument', 'FileController@saveDocument');
        Route::post('settings', 'SettingsController@saveSettings');

        // DELETE
        Route::delete('user/{id}', 'UserController@destroy');
        Route::delete('role/{id}', 'RoleController@destroy');
        Route::delete('deleteLecture/{id}', 'LectureController@deleteLecture');
        Route::delete('deletePartner/{id}', 'PartnerController@deletePartner');
        Route::delete('deleteMember/{id}', 'TeamController@deleteTeamMember');
        Route::delete('deleteFaq/{id}', 'FaqController@deleteFaq');
        Route::delete('deleteReference/{id}', 'ReferenceController@deleteReference');

    // GET
    Route::get('me', 'AuthController@getMe');
    Route::get('getMyLecture', 'JoinLectureController@getMyLecture');
    Route::get('getAllLectures', 'LectureController@getAllLectures');

    // POST
    Route::post('logout', 'AuthController@logout');
    Route::post('resetPassword', 'ResetPasswordController@resetPasswordProfile');
    Route::post('avatar', 'FileController@saveAvatar');
    Route::post('editMe', 'UserController@editMe');
    Route::post('joinLecture/{id}', 'JoinLectureController@joinLecture');
    Route::post('leftLecture/{id}', 'JoinLectureController@leftLecture');
});
