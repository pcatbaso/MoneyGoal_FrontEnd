import { Component  } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
// import { NgxToastService } from 'ngx-toast-notifier';
// import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { UsuarioI } from 'src/app/interfaces/usuario.interface';

@Component({
  selector: 'app-money-goal',
  templateUrl: './money-goal.component.html',
  styleUrls: ['./money-goal.component.scss']
})
export class MoneyGoalComponent {
  ingresar = false;
  registrar = false;
  registrarTarjeta = false;
  registrarTerminos = false;
  checkedTermino1 = true;
  checkedTermino2 = true;

  loginForm = new FormGroup({
    email_usuario: new FormControl(''),
    contrasenia_usuario: new FormControl('')
  })

  registerForm = new FormGroup({
    nombre_usuario: new FormControl(''),
    apellidoPaterno_usuario: new FormControl(''),
    apellidoMaterno_usuario: new FormControl(''),
    direccion_usuario: new FormControl(''),
    email_usuario: new FormControl(''),
    telefono_usuario: new FormControl(''),
    contrasenia_usuario: new FormControl(''),

    cardName: new FormControl(''),
    cardNumber: new FormControl(''),
    expiration: new FormControl(''),
    cvv: new FormControl(''),
    termino1: new FormControl(true),
    termino2: new FormControl(true)
  })

  constructor (
    private formBuilder: FormBuilder,
   // public notiSvc: NgxToastService,
   // private _usuarioServicio: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  )
  {

  }

  ngOnInit(): void {
    this.ingresar = true;
    this.registrar = false;
    this.registrarTarjeta = false;
    this.registrarTerminos = false;
  }

  btnRegistroIngreso(seleccionado: string){

    switch(seleccionado){
      case 'ingresar':
        this.ingresar = true;
        this.registrar = false;
        this.registrarTarjeta = false;
        this.registrarTerminos = false;
        break;
      case 'registrarse':
        this.ingresar = false;
        this.registrar = true;
        this.registrarTarjeta = false;
        this.registrarTerminos = false;
        break;
      case 'continuarTarjeta':
        this.ingresar = false;
        this.registrar = false;
        this.registrarTarjeta = true;
        this.registrarTerminos = false;
        break;
      case 'continuarTerminos':
        this.ingresar = false;
        this.registrar = false;
        this.registrarTarjeta = false;
        this.registrarTerminos = true;
        break;
    }
  }

  iniciarSesion(usuario: any){
    if(usuario.email_usuario === "" && usuario.contrasenia_usuario === ""){
      //this.notiSvc.onDanger('Error', 'Ingrese un correo eléctronico y una contraseña válida')
    }
    else if(usuario.email_usuario === ""){
     // this.notiSvc.onDanger('Error', 'Ingrese un correo eléctronico válido')
    }
    else if(usuario.contrasenia_usuario === ""){
    //  this.notiSvc.onDanger('Error', 'Ingrese una contraseña válida')
    }
    else {
      // this._usuarioServicio.login_get(usuario)
      // .subscribe({
      //   next: resp => {
      //     console.log("se encuentra registrado");
      //     if(resp.length > 0){
      //       this.router.navigate(['/Inicio'], { relativeTo: this.route });
      //     }
      //     else{
      //       this.notiSvc.onWarning('Advertencia', 'El usuario no se encuentra registrado')
      //     }
      //   },
      //   error: err => {
      //     this.notiSvc.onWarning('Advertencia', "oh oh ¡Ocurrio un error!");
      //   }
      // });
    }

    console.log(usuario)
  }

  registroCompleto(usuario: any){
    usuario.id_rol = 'APS';

    if (!this.registerForm.invalid) {
      // this._usuarioServicio.addUser(usuario)
      // .subscribe({
      //   next: resp => {
      //     console.log("resp",resp)

      //     if(resp.text === "El usuario ya se encuentra registrado"){
      //       this.notiSvc.onWarning('Advertencia', "El usuario " + usuario.email_usuario + " ya se encuentra registrado");
      //     }
      //     else{
      //       this.notiSvc.onSuccess('Éxito', "El usuario " + usuario.email_usuario + " se registro correctamente");
      //     }
      //   },
      //   error: err => {
      //     this.registerForm.reset();
      //     console.log(err.message)
      //   }
      // });

    }
  }

}
