import { Component } from '@angular/core';

@Component({
    template: `<h2 class="title">{{'aboutTxt2' | translate }}</h2>
                <div class="wrap-text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus tellus sed erat consectetur efficitur. Duis tincidunt neque eget ullamcorper bibendum. Proin egestas turpis in est aliquet rhoncus. Nunc sit amet pulvinar dolor, non fermentum lacus. Proin quis aliquet magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam eleifend facilisis placerat. Quisque tincidunt vestibulum erat. Maecenas at justo eu massa dapibus sollicitudin ut eu sapien. Integer eget semper tortor. Suspendisse vitae erat sed ipsum bibendum fringilla. Aliquam a urna non libero vehicula convallis. Praesent ullamcorper a neque pellentesque venenatis. Sed vitae convallis tellus, in porta turpis. Etiam tincidunt tortor gravida, ornare tellus nec, vestibulum nisl.
                    </p>
                </div>
              ` ,
    styles: ['.wrap-text{border: 1px solid black; margin: 7em; padding: 10px; background-color: white}']
})

export class AboutComponent {}