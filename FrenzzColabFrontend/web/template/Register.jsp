<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

<title>Registration Page</title>
</head>
<body><br><br><br><br>
<div class="container">
  <h1>Bootstrap validation</h1>
  <form class="form-horizontal" id="validateForm">
<div class="row">
	<div class="col-md-offset-1 col-md-4">
 
		  <div class="form-group">
			<label class="control-label">Full Name:</label>
			<input  name="full_name" placeholder="Full Name" class="form-control"  type="text">
		  </div>
		  
		  <div class="form-group">
			<label class="control-label">Phone No.:</label>
			<input name="phone" placeholder="Phone No" class="form-control" type="text">
		  </div>
		  
		  <div class="form-group">
			<label class="control-label">Address:</label>
			<textarea class="form-control" name="address" placeholder="Address..."></textarea>
		  </div>
		  
		  <div class="form-group">
			<label>Gender</label>
			<div class="radio">
				<label><input type="radio" name="gender" value="male" /> Male</label>
			</div>
			<div class="radio">
				<label><input type="radio" name="gender" value="female" /> Female</label>
			</div>
		  </div>
		
	</div>
	<div class="col-md-offset-1 col-md-4">
		<div class="form-group">
			<label class="control-label">E-Mail:</label>
			<input name="email" placeholder="E-Mail" class="form-control"  type="text">
		  </div>
		  
		<div class="form-group has-feedback">
			<label for="password"  class="control-label">Password</label>
			<input class="form-control" id="userPw" type="password" placeholder="password" name="password"  />
		</div>
	 
		<div class="form-group has-feedback">
			<label for="confirmPassword"  class="control-label"> Confirm Password </label>
			 <input class="form-control" id="userPw2" type="password" placeholder="Confirm password" name="confirmPassword" /> 
		</div>
		
		<div class="form-group">
			<label class="control-label">Role:</label>
			<select name="role" class="form-control" >
				<option value=" " >Please select role</option>
				<option>Admin</option>
				<option>User</option>
			</select>
		</div>
		<div class="form-group">
			<label>Language Known:</label>
			<div class="checkbox">
				<label><input type="checkbox" name="lang_known[]" value="E" /> English</label>
			</div>
			<div class="checkbox">
				<label><input type="checkbox" name="lang_known[]" value="T" /> Tamil</label>
			</div>
			<div class="checkbox">
				<label><input type="checkbox" name="lang_known[]" value="O" /> Other</label>
			</div>
		</div>
		
		
		 
		<div class="form-group">
			<button type="submit" class="btn btn-success" >Submit</button>
		  </div>
		  
	</div>
</div>
 
</form>
<!--  <-- <script type="text/javascript">
 $('#validateForm').bootstrapValidator({
feedbackIcons: {
	valid: 'glyphicon glyphicon-ok',
	invalid: 'glyphicon glyphicon-remove',
	validating: 'glyphicon glyphicon-refresh'
},
fields: {
	full_name: {
		validators: {
			stringLength: {
				min: 5,
				message: 'Please Enter your Full name with minimum 5 letters length'
			},
			notEmpty: {
				message: 'Please Enter your Full name'
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
	address: {
		validators: {
			stringLength: {
				min: 15,
				max: 100,
				message:'Please enter at least 15 characters and no more than 100'
			},
			notEmpty: {
				message: 'Please Enter Address'
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
	password: {
		validators: {
			notEmpty: {
				message: 'Enter your profile password'
			}
		}
	},
	confirmPassword: {
		validators: {
			notEmpty: {
				message: 'Enter confirm your profile password'
			},
			identical: {
				field: 'password',
				message: 'Enter the password, what enter in password field'
			}
		}
	 },
	 'lang_known[]': {
		validators: {
			notEmpty: {
				message: 'The Language Known is required'
			}
		}
	},
	role: {
		validators: {
			notEmpty: {
				message: 'Choose your user role'
			}
		}
	},
	
	}
});
 </script> -->
  </div>
<br><br><br><br><br>
</body>
</html>