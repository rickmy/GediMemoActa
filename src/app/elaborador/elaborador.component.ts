import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ServicioService } from '../servicio.service';
import { Router } from '@angular/router';
=======
<<<<<<< HEAD
=======
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Resume, Experience, Education, Skill } from '../models/resume'

pdfMake.vfs = pdfFonts.pdfMake.vfs;
>>>>>>> 5c2f9c5d12195cb0498c7c0d337f6a618a339f6f
>>>>>>> 6e05be222768b5e8fc47ba880202965338b06f89

@Component({
  selector: 'app-elaborador',
  templateUrl: './elaborador.component.html',
  styleUrls: ['./elaborador.component.css']
})
export class ElaboradorComponent implements OnInit {

<<<<<<< HEAD
  constructor(public service: ServicioService,
    public router: Router) { 
=======
<<<<<<< HEAD
  constructor() { 
=======
  resume = new Resume();

  degrees = ['Básico', 'Inicial','Bachillerato', 'Estudios Superiores'];

  constructor() { 
    this.resume = JSON.parse(sessionStorage.getItem('resume')) || new Resume();
    if (!this.resume.experiences || this.resume.experiences.length === 0) {
      this.resume.experiences = [];
      this.resume.experiences.push(new Experience());
    }
    if (!this.resume.educations || this.resume.educations.length === 0) {
      this.resume.educations = [];
      this.resume.educations.push(new Education());
    }
    if (!this.resume.skills || this.resume.skills.length === 0) {
      this.resume.skills = [];
      this.resume.skills.push(new Skill());
    }

    
>>>>>>> 6e05be222768b5e8fc47ba880202965338b06f89
  }

  ngOnInit() {
  }

  agregarMensaje(){
    console.log('Hola Elaborador!°');
  }

  //Métodos a usar
  addExperience() {
    this.resume.experiences.push(new Experience());
  }
  addEducation() {
    this.resume.educations.push(new Education());
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
    this.resume = new Resume();
  }
  getDocumentDefinition() {
    sessionStorage.setItem('resume', JSON.stringify(this.resume));
    return {
      content: [
        {
          text: 'Hoja de Vida',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
          columns: [
            [{
              text: this.resume.name,
              style: 'name'
            },
            {
              text: this.resume.address
            },
            {
              text: 'Email : ' + this.resume.email,
            },
            {
              text: 'Teléfono : ' + this.resume.contactNo,
            },
            {
              text: 'Usuario GitHub: ' + this.resume.socialProfile,
              link: this.resume.socialProfile,
              color: 'green',
            }
            ],
            [
              this.getProfilePicObject()
            ]
          ]
        },
        {
          text: 'Habilidades',
          style: 'header'
        },
        {
          columns : [
            {
              ul : [
                ...this.resume.skills.filter((value, index) => index % 3 === 0).map(s => s.value)
              ]
            },
            {
              ul : [
                ...this.resume.skills.filter((value, index) => index % 3 === 1).map(s => s.value)
              ]
            },
            {
              ul : [
                ...this.resume.skills.filter((value, index) => index % 3 === 2).map(s => s.value)
              ]
            }
          ]
        },
        {
          text: 'Experiencia',
          style: 'header'
        },
        this.getExperienceObject(this.resume.experiences),
        {
          text: 'Educación',
          style: 'header'
        },
        this.getEducationObject(this.resume.educations),
        {
          text: 'Otros Detalles',
          style: 'header'
        },
        {
          text: this.resume.otherDetails
        },
        {
          text: 'Firma',
          style: 'sign'
        },
        {
          columns : [
              { qr: this.resume.name + ', Teléfono de contacto : ' + this.resume.contactNo, fit : 100 },
              {
              text: `(${this.resume.name})`,
              alignment: 'right',
              }
          ]
        }
      ],
      info: {
        title: this.resume.name + '_HOJA DE VIDA',
        author: this.resume.name,
        subject: 'RESUME',
        keywords: 'RESUME, ONLINE RESUME',
      },
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            margin: [0, 20, 0, 10],
            decoration: 'underline'
          },
          name: {
            fontSize: 16,
            bold: true
          },
          jobTitle: {
            fontSize: 14,
            bold: true,
            italics: true
          },
          sign: {
            margin: [0, 50, 0, 10],
            alignment: 'right',
            italics: true
          },
          tableHeader: {
            bold: true,
          }
        }
    };
>>>>>>> 5c2f9c5d12195cb0498c7c0d337f6a618a339f6f
  }

  ngOnInit() {
  }

<<<<<<< HEAD
 
=======

  getProfilePicObject() {
    if (this.resume.profilePic) {
      return {
        image: this.resume.profilePic ,
        width: 75,
        alignment : 'right'
      };
    }
    return null;
  }

  fileChanged(e) {
    const file = e.target.files[0];
    this.getBase64(file);
  }
  getBase64(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      this.resume.profilePic = reader.result as string;
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  }
  addSkill() {
    this.resume.skills.push(new Skill());
  }

>>>>>>> 5c2f9c5d12195cb0498c7c0d337f6a618a339f6f
}
