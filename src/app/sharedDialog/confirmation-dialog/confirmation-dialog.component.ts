import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  styleUrls: ['./confirmation-dialog.component.scss'],
  template: `
    <div mat-dialog-content style="bottom: 0;left: 0; transform: translate(0, 0); background-color:#e5e5e5;">
  <p>{{ data }}</p>
  <p style="color: green;" class="buton">X</p>
</div>


  `
})
export class ConfirmationDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) { }

  ngOnInit() {
    // Feche o diálogo automaticamente após 2 segundos
    setTimeout(() => {
      this.dialogRef.close();
    }, 2000);
  }
}
