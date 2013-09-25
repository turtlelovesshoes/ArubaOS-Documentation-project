<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes() ?>>
<head>
<title><?php bloginfo('name') ?></title>
<meta http-equiv="content-type" content="<?php bloginfo('html_type') ?>; charset=<?php bloginfo('charset') ?>" />

<meta property="og:title" content="<?php the_title(); ?>" /> <!-- this code retrieves the post title -->
<meta property="og:site_name" content="<?php bloginfo('name') ?>"/><!--the blog name goes here -->
<meta property="og:url" content="<?php the_permalink(); ?> " /><!-- this code gets the post URL -->
<meta property="og:type" content="blog" /><!-- this tag tells Facebook that this is a blog post -->
<meta property="fb:admins" content="1569697804,arubanetworks" />

<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo('template_url') ?>/reset.css" />
<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo('stylesheet_url') ?>" />
<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo('template_url') ?>/aruba_style.css" />

<!--[if IE 8]><link rel="stylesheet" media="screen" type="text/css" href="<?php bloginfo('template_url') ?>/ie8.css"  /><![endif]-->
<!--[if IE 7]><link rel="stylesheet" media="screen" type="text/css" href="<?php bloginfo('template_url') ?>/ie7.css"  /><![endif]-->
<link rel="pingback" href="<?php bloginfo('pingback_url') ?>" />
<link rel="shortcut icon" href="<?php bloginfo('stylesheet_directory'); ?>/favicon.ico" />
<?php
    // enqueue front-end stuff
	wp_enqueue_script('jquery');
	wp_enqueue_script('lightview');
	wp_enqueue_style('lightview');
    
	if ( is_singular() && get_option( 'thread_comments' ) )
		wp_enqueue_script( 'comment-reply' ); // Support sites with threaded comments (when in use).

	wp_head(); // Always have wp_head() just before the closing </head>
?>
<script type="text/javascript" src="<?php bloginfo('url'); ?>/js/jquery.cycle.all.2.74.js"></script>
<!-- Additional jQuery dependent scripts here! -->
<!-- Elastic JS -->
<script type="text/javascript" src="<?php bloginfo('url'); ?>/js/pdfLinksWidget.js"></script>
<script type="text/javascript"> 
function newPopupAP(url, w, h) {
	var paramString = 'height=' + String(h);
	paramString += ',width=' + String(w);
	paramString += ',left=10,top=10,resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no,status=yes';
	popupWindow = window.open(url,'popUpWindow',paramString);
}
</script>
<script type="text/javascript" src="<?php bloginfo('template_url') ?>/js/swfobject.js"></script>
</head>
<body <?php body_class(); ?>>
<!--[if lte IE 6]>
    <script src="<?php bloginfo('template_url') ?>/js/ie6/warning.js"></script>
    <script>window.onload=function(){e("<?php bloginfo('template_url') ?>/images/ie6update/")}</script>
<![endif]-->
<div id="wrapper">
    <div id="wrapper_content">
        <div class="header">
            <div id="logo"><a href="<?php bloginfo('home') ?>">Aruba Networks Logo</a></div>
            <div class="search_wrapper"><a href="/company/contact-us/contact-a-sales-rep/" class="htb-button">How To Buy</a>
                <ul class="global_settings" style="float: right;">
                    <li><a href="http://server.iad.liveperson.net/hc/15299416/?cmd=file&file=visitorWantsToChat&site=15299416&byhref=1" target="_blank">Chat</a></li>
                    <li><a href="/languages">Languages</a></li>
                </ul>
                <div class="searchbox" style="clear: both; float: right;">
                    <form action="<?php echo site_url(); ?>/search" id="cse-search-box">
                        <ul>
                            <li>
                                <div class="search">
                                    <input type="hidden" name="cx" value="017782839116229869462:iaqf3zzj87m" />
                                    <input type="hidden" name="cof" value="FORID:10" />
                                    <input type="hidden" name="ie" value="UTF-8" />
                                    <input type="text" name="q" id="s" />
                                </div>
                                &nbsp;&nbsp;<button name="sa" type="submit" value="<?php esc_attr__('Go'); ?>" >Go</button>
                            </li>
                        </ul>
                    </form>
<!--<script type="text/javascript" src="http://www.google.com/cse/brand?form=cse-search-box1&lang=en"></script>-->
                </div>
                <div class="clear"></div>
            </div>
        </div>
<?php /*?>        <?php wp_nav_menu(array('theme_location' => 'main')); ?> <?php */?>
<?php get_template_part( 'nav' );?>
<div id="content">