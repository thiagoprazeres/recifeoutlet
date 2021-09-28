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
  carregando = true;
  pagamentoProcessado = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.cardForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
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
    };
    console.log(lead);
    this.http.post('inserir_lead.php', lead).subscribe(
      (res: any) => {
        console.log('res', res);
        this.carregando = false;
        this.pagamentoProcessado = true;
      },
      (err) => {
        console.error(err);
        this.carregando = false;
      },
      () => (this.carregando = false)
    );
  }
}
