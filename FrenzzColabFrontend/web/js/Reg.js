
 $('#validateForm').bootstrapValidator({
feedbackIcons: {
	valid: 'glyphicon glyphicon-ok',
	invalid: 'glyphicon glyphicon-remove',
	validating: 'glyphicon glyphicon-refresh'
},
fields: {
	fname: {
		validators: {
			stringLength: {
				min: 5,
				message: 'Please Enter your first name with minimum 5 letters length'
			},
			notEmpty: {
				message: 'Please Enter your First name'
			}
		}
	},
	lname: {
		validators: {
			stringLength: {
				min: 5,
				message: 'Please Enter your last name with minimum 5 letters length'
			},
			notEmpty: {
				message: 'Please Enter your Last name'
			}
		}
	},
	phone: {
		validators: {
			numeric: {
				message: 'The phone no must be a number'
			},
			notEmpty: {
				message: 'Please Enter your phone number'
			}
		}
	},
	
	
	gender: {
		validators: {
			notEmpty: {
				message: 'The gender option is required'
			}
		}
	},
	email: {
		validators: {
			notEmpty: {
				message: 'Please Enter your email address'
			},
			emailAddress: {
				message: 'Please Enter a valid email address'
			}
		}
	},
	
	
	dob: {
		validators: {
			notEmpty: {
				message: 'Please Enter your date of birth'
			},
			notEmpty: {
				message: 'Please Enter a valid date of birth '
			}
		}
	},
	pass: {
		validators: {
			notEmpty: {
				message: 'Enter your profile password'
			}
		}
	},
	
	 
	
	}
});
 