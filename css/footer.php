<?php
/**
 * @package Nerdery_Theme
 * @subpackage Footer
 */
?>
</div><!-- END CONTENT -->
    </div><!-- END WRAPPER CONTENT -->
	<div class="footer">
        <div class="footer_menu">
			<div class="footer_menu_list column1"> 
				<h4 class="list_title">Communities</h4>
				<ul><li><a href="http://community.arubanetworks.com/" target="_blank">Airheads Social</a></li>
				<li><a href="/company/aruba-atmosphere/?click=footer">Corporate Blog</a></li>
				<li><a href="/company/innovation-island/?click=footer">Technology Blog</a></li>
				<li><a href="/company/aruba-shore/?click=footer">Life at Aruba Blog</a></li>
				<li><a href="/company/communities/?click=footer">Social Media</a></li></ul>
			</div>
			<div class="footer_menu_list column2"> 
				<h4 class="list_title">Company</h4>
				<ul><li><a href="/company/about-us/?click=footer">About Us</a></li>
				<li><a href="/company/news-events/news-coverage-home/?click=footer">News Coverage</a></li>
				<li><a href="/company/news-events/upcoming-events/?click=footer">Events</a></li>
				<li><a href="/company/news-events/news-releases/?click=footer">Press Releases</a></li>
				<li><a href="http://ir.arubanetworks.com/">Investor Relations</a></li>
				<li><a href="/company/careers/?click=footer">Careers</a></li></ul>
			</div>
			<div class="footer_menu_list column3"> 
			<h4 class="list_title">Support</h4>
				<ul><li><a href="/support-services/?click=footer">Contact Support</a></li>
				<li><a href="http://partners.arubanetworks.com/" target="_blank">Partner Login</a></li>
				<li><a href="http://support.arubanetworks.com/" target="_blank">Support Login</a></li>
				<li><a href="http://licensing.arubanetworks.com/" target="_blank">Licensing Login</a></li>
				<li><a href="/company/contact-us/contact-a-sales-rep/?click=footer">How to Buy</a></li></ul>
			</div>
			<div class="footer_menu_list column4"> 
				<h4 class="list_title">Resources</h4>
				<ul><li><a href="/technology/white-papers/?click=footer">White Papers</a></li>
				<li><a href="/technology/reference-design-guides/?click=footer">Design Guides</a></li>
				<li><a href="/solutions/case-studies/?click=footer">Case Studies</a></li>
				<li><a href="/company/news-events/videos/?click=footer">Videos</a></li>
				<li><a href="/company/news-events/webcasts/?click=footer">Webcasts</a></li></ul>
			</div>
            <div class="clear"></div>
        </div>
        <!-- END FOOTER MENU -->
        <div class="footer_details">
            <div class="footer_menu_list legal">
                <ul>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li><a href="/terms-of-service">Terms of Service</a></li>
                    <li><a href="/legal-briefs">Legal</a></li>
                </ul>
            </div>
			<?php
			$true = is_home();
			if (!$true) : ?>
            <div class="footer_menu_list social">
                <ul>
				    <li><a target="_blank" href="http://airheads.arubanetworks.com"><img alt="Airheads Social" src="http://www.arubanetworks.com/wp-content/themes/nerdery-skeleton-theme/images/airheadssocial.png"></a></li>
                    <li><a target="_blank" href="http://www.facebook.com/arubanetworks"><img alt="Facebook" src="http://www.arubanetworks.com/wp-content/themes/nerdery-skeleton-theme/images/facebook.png"></a></li>
                    <li><a target="_blank" href="http://twitter.com/arubanetworks"><img alt="Twitter" src="http://www.arubanetworks.com/wp-content/themes/nerdery-skeleton-theme/images/twitter.png"></a></li>
                    <li><a target="_blank" href="http://ir.arubanetworks.com/phoenix.zhtml?c=206778&amp;p=rssSubscription"><img alt="RSS" src="http://www.arubanetworks.com/wp-content/themes/nerdery-skeleton-theme/images/rss.png"></a></li>
                    <li><a target="_blank" href="http://www.youtube.com/user/ArubaNetworks"><img alt="YouTube" src="http://www.arubanetworks.com/wp-content/themes/nerdery-skeleton-theme/images/youtube.png"></a></li>
                </ul>
            </div>
			<?php endif; ?>
            <div class="footer_menu_list copyright">
                <p>
				Copyright &copy; <?php echo date('Y'); ?>. Aruba Networks, Inc. All rights reserved.</p>
            </div>
            <div class="clear"></div>
        </div>
        <!-- END FOOTER DETAILS -->
    </div>
    <!-- END FOOTER -->
</div>
<!-- END WRAPPER -->

<script type="text/javascript" src="<?php bloginfo('template_url') ?>/js/main.js"></script>
<!--[if IE 7]><script type="text/javascript" src="<?php bloginfo('template_url') ?>/js/ie.js"></script><![endif]-->

<?php wp_footer(); // Always have wp_footer() just before the closing </body> ?>

<!-- Clicky Analytics -->
<script src="http://static.getclicky.com/js" type="text/javascript"></script>
<script type="text/javascript">try{ clicky.init(66370483); }catch(err){}</script>
<noscript></noscript>
<!-- Clicky Analytics -->

<!-- Marketo -->
<script src="http://munchkin.marketo.net/munchkin.js" type="text/javascript">
</script> 
<script>
mktoMunchkin("009-RUR-657");
</script>
<!-- Marketo -->

<!-- LivePerson -->
<script type="text/javascript"> 
/*
disabling to debug
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
*/
</script>
<script type="text/javascript"> 
/*
var pageTracker = _gat._getTracker("UA-XXXXXX-X");
pageTracker._setAllowLinker(true);
pageTracker._setDomainName("none");
pageTracker._setAllowHash(false);
pageTracker._trackPageview();
*/
</script> 
<!-- LivePerson -->


</body>
</html>