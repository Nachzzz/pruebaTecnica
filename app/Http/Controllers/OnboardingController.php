<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class OnboardingController extends Controller
{
    public function welcome()
    {
        return Inertia::render('Onboarding/Welcome');
    }

    public function profile()
    {
        return Inertia::render('Onboarding/Profile');
    }

    public function complete()
    {
        return Inertia::render('Onboarding/Complete');
    }
}