import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartServiceService, ItemInCart } from '../cart.service';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-buy-dialog',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  constructor(
    public dialogRef: MatDialogRef<CheckoutComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { totalPrice: number, cartItems: ItemInCart[] },
    private readonly snackBar: MatSnackBar,
    private readonly service: CartServiceService
  ) {}

  onConfirmPurchase(): void {
    this.snackBar.open('Purchase succesful !', 'Close', {
      duration: 5000,
      verticalPosition: 'top' as MatSnackBarVerticalPosition
    })
    this.service.deleteAll()
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
