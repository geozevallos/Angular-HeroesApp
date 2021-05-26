import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: []
})
export class ConfirmarComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ConfirmarComponent>,

    // Para recibir la data, en este caso es publica para poder usarla en el HTML
    @Inject(MAT_DIALOG_DATA) public data: Heroe

  ) { }


  ngOnInit(): void {
    // console.log(this.data);
    
  }

  borrar() {
    this.dialogRef.close(true)
  }

  cancelar() {
    this.dialogRef.close()
  }

}