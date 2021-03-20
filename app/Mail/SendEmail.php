<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendEmail extends Mailable
{
    use Queueable, SerializesModels;

    protected $name;

    protected $email;

    protected $text;

    /**
     * SendEmail constructor.
     * @param $name
     * @param $email
     * @param $text
     */
    public function __construct($name, $email, $text)
    {
        $this->name = $name;
        $this->email = $email;
        $this->text = $text;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject("Někdo vám poslal email")
            ->view('emails.sendMail')
            ->with([
                'name' => $this->name,
                'email' => $this->email,
                'text' => $this->text
            ]);
    }

}
