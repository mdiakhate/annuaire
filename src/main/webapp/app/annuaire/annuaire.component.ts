import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'jhi-annuaire',
  templateUrl: './annuaire.component.html',
  styleUrls: [
    'annuaire.component.scss'
  ]
})

export class AnnuaireComponent implements OnInit {

  message: string;

  constructor() {
    this.message = 'AnnuaireComponent message';
  }

  ngOnInit() {
    function tst() { alert('test'); }
    function openPage(pageName, elmnt, color) {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName('tabcontent');
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = 'none';
        }
        tablinks = document.getElementsByClassName('tablink');
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.backgroundColor = '';
        }
        document.getElementById(pageName).style.display = 'block';
        elmnt.style.backgroundColor = color;
        alert('toto');
    }

    // Get the element with id="defaultOpen" and click on it
     document.getElementById('defaultOpen').click();
  }

}
