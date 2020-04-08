import { Component, OnInit } from '@angular/core';
import { Memorandums} from 'src/app/models/memorandums';
import pdfMake from 'pdfmake/build/pdfmake';
<<<<<<< HEAD
import { DatePipe } from '@angular/common'
=======
>>>>>>> 5c2f9c5d12195cb0498c7c0d337f6a618a339f6f

@Component({
  selector: 'app-memorandums',
  templateUrl: './memorandums.component.html',
  styleUrls: ['./memorandums.component.css']
})
export class MemorandumsComponent implements OnInit {

<<<<<<< HEAD
  memo = new Memorandums();
  date: any;
  keyword = 'nombre'
  listaDocentes = [
   {nombre: 'Kevin Cevallos',cargo:'Docente Desarrollo de Software'},
   {nombre: 'Anthony Larrea',cargo:'Docente Arte culinario'},
   {nombre:'Ricardo Yaguachi',cargo:'Docente Marketing'}
  ]

  constructor(public datepipe: DatePipe) { 
    this.memo=JSON.parse(sessionStorage.getItem('memo')) || new Memorandums();

  }

  ngOnInit(): void {
    this.obtenerFecha()
=======
  memo = new Memorandums()

  constructor() { }

  ngOnInit(): void {
>>>>>>> 5c2f9c5d12195cb0498c7c0d337f6a618a339f6f
  }

  //metodos  a usar

<<<<<<< HEAD
  selectEvent(item) {
    this.memo.para = item.nombre 
    console.log(this.memo.para)
  }

  obtenerFecha() {
    this.date = new Date();
    this.date = this.datepipe.transform(this.date, 'yyyy-MM-dd');
    return this.date;
  }
=======
>>>>>>> 5c2f9c5d12195cb0498c7c0d337f6a618a339f6f

  getDocumentDefinition() {
    sessionStorage.setItem('memo', JSON.stringify(this.memo));
    return {
      content: [
        {
<<<<<<< HEAD
          image: ''
          ,fit: [50, 50]
        },
        {
          text: 'Instituto Superior Tecnológico de Turismo y Patrimonio Yavirac',
=======
          text: 'Instituto el cual pertenece el usuario',
>>>>>>> 5c2f9c5d12195cb0498c7c0d337f6a618a339f6f
          
          style : 'titulo'
        },
        {
<<<<<<< HEAD
          text: `MEMORANDUM  `,
          style : 'titulo'
        },
        {
          text: `"ISTBJ-DS-001-2020"`,
          style : 'titulo'
        },
        
=======
          text: `MEMORANDUM "ISTBJ-DS-001-2020" `,
          style : 'titulo'
        },
>>>>>>> 5c2f9c5d12195cb0498c7c0d337f6a618a339f6f
        {
          columns: [
            [
            {
              text: `De : "Nombre del usuario logeado en el sistema"`,
              style: 'cabecera'
            },
            {
              text: `Para : ${this.memo.para}`,
              style: 'cabecera'
            },
            {
              text: `Asunto: ${this.memo.asunto}`,
              style: 'cabecera'
            },
            {
<<<<<<< HEAD
              text: `Fecha: ${this.date}`,
=======
              text: `Fecha: ${this.memo.fecha}`,
>>>>>>> 5c2f9c5d12195cb0498c7c0d337f6a618a339f6f
              style: 'cabecera'
            }
            ]
          ]
        },
        {
          text: this.memo.cuerpo,
          style: 'body'
        },
        
        {
          text: this.memo.despedida,
          style: 'body'
        },
        {
          text: 'Atentamente',
          alignment: 'center',
          fontSize: 12,
          margin : [0 , 40 , 0 ,60]
        },
        {
          text: `"Nombre del usuario logeado en el sistema"`,
          style: 'pie'
        },
        {
          text: `"Carrera del usuario"`,
          style: 'pie'
        }
      ],
        styles: {
          titulo: {
<<<<<<< HEAD
            fontSize: 12,
=======
            fontSize: 14,
>>>>>>> 5c2f9c5d12195cb0498c7c0d337f6a618a339f6f
            bold: true,
            margin: [0, 20, 0, 20],
            upperCase: true ,
            alignment: 'center',
            textTransform : 'uppercase'
          },
          cabecera: {
            fontSize: 12,
            margin: [5, 10, 5, 10],
            textAlign: 'justify'
          },
          body: {
            fontSize: 12,
            fontFamily : 'times new roman',
            margin : [5, 10,5,10],
            textAlign: 'justify'
          },
          pie : {
            fontSize: 12,
            fontFamily : 'times new roman',
            margin : [5, 10,5,10],
            bold: true,
            alignment : 'center',
            textAlign: 'justify'
          }
        }
    };
  }

  generatePdf(action = 'open') {
    const documentDefinition = this.getDocumentDefinition();
    switch (action) {
      case 'open': pdfMake.createPdf(documentDefinition).open(); break;
      case 'print': pdfMake.createPdf(documentDefinition).print(); break;
      case 'download': pdfMake.createPdf(documentDefinition).download(); break;
      default: pdfMake.createPdf(documentDefinition).open(); break;
    }
  }
  resetForm() {
    this.memo = new Memorandums();
  }

<<<<<<< HEAD
}
=======
}
>>>>>>> 5c2f9c5d12195cb0498c7c0d337f6a618a339f6f
