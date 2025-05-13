<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\Browser\Pages\LoginPage;
use Tests\DuskTestCase;

class LoginTest extends DuskTestCase
{
    public function test_login(): void
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/')
                ->on(new LoginPage)
                ->type('@email', 'test@example.com')
                ->type('@password', 'password')
                ->press('Login')
                ->waitForLocation('/', 3);
        });
    }
}
