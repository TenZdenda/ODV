<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\URL;

class ResetPassword extends Mailable
{
    use Queueable, SerializesModels;

    protected $token;

    protected $user;

    /**
     * Create a new message instance.
     *
     * @param $token
     */
    public function __construct($user, $token)
    {
        $this->token = $token;
        $this->user = $user;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from(['address' => 'no-reply@epicapos.cz', 'name' => 'Zapomenuté heslo'])
            ->subject("Zapomenuté heslo")
            ->view('emails.forgotPassword')
            ->with([
                'baseUrl' => /*URL::route("/admin/reset")*/ "http://localhost:3000/admin/reset",
                'userName' => $this->user->name,
                'token' => $this->token,
            ]);
    }

}
