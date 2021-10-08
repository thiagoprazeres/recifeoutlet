import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss'],
})
export class ContatoComponent implements OnInit {
  cardForm;
  carregando = false;
  mensagemSucesso = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.cardForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      mensagem: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.carregando = false;
  }

  onSubmit(cardData: any): void {
    this.carregando = true;
    // alert(cardData.nome);
    const lead = {
      nome: cardData.nome,
      email: cardData.email,
      telefone: cardData.telefone,
      mensagem: cardData.mensagem,
    };
    console.log(lead);
    this.http.post('contato.php', lead).subscribe(
      (res: any) => {
        console.log('res', res);
        this.carregando = false;
        this.mensagemSucesso = true;
      },
      (err) => {
        console.error('Deu erro', err);
        this.carregando = false;
      },
      () => (this.carregando = false)
    );
  }
}
