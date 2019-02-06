$(document).ready(function(){


    $("body").on('mouseover','.item-product,.item-product',(function(){
        $(".hide-hover-images",this).show();
        $(".hide-hover-images-product",this).show();
    }));

    $("body").on('mouseout','.item-product,.item-product',(function(){
        $(".hide-hover-images",this).hide();
        $(".hide-hover-images-product",this).hide();
    }));


    $("body").on('mouseover','.navbar-right',(function(){
        $(".language-div").show();
    }));

    $("body").on('mouseout','.navbar-right',(function(){
        $(".language-div").hide();
    }));


    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    // notEmpty: {
                    //     // message: 'Please supply your first name'
                    // }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        // message: 'Please supply your email address88888888888'
                    },
                    emailAddress: {
                        // message: 'Please supply a valid email addressvvvvvvvvv'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        // message: 'Please supply your phone number'
                    },
                    phone: {
                        country: 'US',
                        // message: 'Please supply a vaild phone number with area code'
                    }
                }
            },
            comment: {
                validators: {
                    stringLength: {
                        min: 10,
                        max: 200,
                        // message:'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        // message: 'Please supply a description of your project'
                    }
                }
            }
        }
    })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
            // $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });



        $('.our-product-menu').click(function(){
            $("body").animate({ scrollTop: 900 }, 600);
        });

        $('.our-object-menu').click(function(){
            // $( "body" ).scrollTop( 3790 );
            $("body").animate({ scrollTop: 3850 }, 600);
        });

        $('.our-contact-menu').click(function(){
            // $( "body" ).scrollTop( 5170 );
            $("body").animate({ scrollTop: 5230 }, 600);
        });

        $('.our-contact-information-menu').click(function(){
            // $( "body" ).scrollTop( 5920  );
            $("body").animate({ scrollTop: 5920 }, 600);
        });

        $('.our-news-menu').click(function(){
            // $( "body" ).scrollTop( 7200 );
            $("body").animate({ scrollTop: 7200 }, 600);
        });



    if($(window).width() < 1200) {
        console.log("mobile");
            $('.our-product-menu').click(function(){
                $("body").animate({ scrollTop: 900 }, 700);
            });
    }


    if($(window).width() < 992) {
        console.log("mobile");
            $('.our-product-menu').click(function(){
                $("body").animate({ scrollTop: 900 }, 1100);
            });
    }




});

