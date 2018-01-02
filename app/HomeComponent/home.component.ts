import { Component } from '@angular/core';

@Component({
    template: `<img src='app/shared/stack-of-books-d-background.jpg' alt="stack of books" />
                <h3 class="welcome">{{ 'welcomeText' | translate }}</h3>
                `,
    styles: ['img{position: absolute; left: 30%; top: 35%}',
        '.welcome{font-size: 39px; top: 45%; position: absolute;left: 50%;}'  
    ]
})

export class HomeComponent {}