export class FormController {
  constructor (Restangular) {
    'ngInject';
    this.Restangular = Restangular;
    this.api = 'http://front.virk.io/api/v1/login/usercard';
    this.response = {};
    this.user = { email : '' , password : ''}
    this.emailError = '';
    this.passwordError = '';
    this.submitForm = 'Enviar';
    this.Error500 = '';
  }

	confirmUser(form) {
		var self = this;
		this.Error500 = '';
		this.submitForm="Procesando";
		if(form.email.$valid && angular.isDefined(form.email.$viewValue)){
			if(form.email.$viewValue!=""){
				this.emailError = '';
				this.user.email = form.email.$viewValue;
				if(form.password.$valid && angular.isDefined(form.password.$viewValue)){
					if(form.password.$viewValue!=""){
						this.passwordError = '';
						this.user.password = form.password.$viewValue;
						this.Restangular.oneUrl('usercard',this.api).get(this.user).then(function(response){
							self.success = response.data.message;
							self.submitForm = 'Enviar';
						},function errorCallback(response){
							self.Error500=response.data.message;
							self.submitForm = 'Enviar';
						});
					}else{
						this.passwordError = 'Contraseña no proporcionada';
						this.submitForm="Enviar";
					}
				}else{
					this.passwordError = 'Contraseña no proporcionada';
					this.submitForm="Enviar";
				}
			}else{
				this.emailError = 'Email Proporcionado de manera incorrecta.';
				this.submitForm="Enviar";
			}
		}else{
			this.emailError = 'Email Proporcionado de manera incorrecta.';
			this.submitForm="Enviar";
		}
	}
}
