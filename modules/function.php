<?php
/**
 * player function file
 * @package Louie
 * @since version 1.0.0
 */

# 加载静态文件
if (!wp_is_mobile()) {
    add_action('wp_enqueue_scripts', 'eaplayer_scripts');
} else {
    if (get_option('eaplayer_options')['mobile'] == 'yes') {
        add_action('wp_enqueue_scripts', 'eaplayer_scripts');
    }
}
function eaplayer_scripts() {
    wp_enqueue_style('player', PLAYER_URL . '/assets/css/eaplayer.css', array(), PLAYER_VERSION, 'all');
    wp_enqueue_script('player-base', PLAYER_URL . '/assets/js/player-base.min.js', array('jquery'), PLAYER_VERSION , true);
    wp_enqueue_script('player', PLAYER_URL . '/assets/js/eaplayer.min.js', array('jquery'), PLAYER_VERSION , true);
}

# 加载播放器模块
add_action('wp_footer', 'eaplayer_html');
function eaplayer_html() {
	if (!wp_is_mobile()) {
		require PLAYER_PATH . '/player.php';
	} else {
        if (get_option('eaplayer_options')['mobile'] == 'yes') {
            require PLAYER_PATH . '/player.php';
        }
    }
}

# 启用文章歌单
add_shortcode('ea', 'eaplayer_shortcode');
function eaplayer_shortcode( $atts, $content = null ) {
    extract( shortcode_atts( array(
        'id' => $id,
        'source' => $source,
        'type' => $type,
        'title' => $title
    ), $atts ) );

    if (!wp_is_mobile()) {
        return eaplayer_list($id, $source, $type, $title);
    }

}
function eaplayer_list($id, $source, $type, $title) { ?>
    <div id="eaplayer-button" class="ui-eaplayer" title="点击播放该专辑" data-id="<?php echo $id; ?>" data-source="<?php echo $source; ?>" data-type="<?php echo $type; ?>" data-title="<?php echo $title; ?>">
        <div class="ui-eaplayer-cover"><img src="<?php echo PLAYER_URL;?>/images/playlist.png"></div>
        <div class="ui-eaplayer-title"><?php echo $title; ?></div>
    </div>
<?php
}
function ea_add_quicktags() { ?> 
    <script type="text/javascript"> 
        QTags.addButton( 'EA歌单', 'EA歌单', '\n[ea id="" source="netease/tencent/xiami" type="0/1" title=""]', '' );
    </script>
<?php
}
add_action('admin_print_footer_scripts', 'ea_add_quicktags' );

# 添加设置页
add_action( 'admin_enqueue_scripts', 'admin_eaplayer_scripts' );
add_action( 'admin_init', 'eaplayerOptions' );
add_action( 'admin_menu', 'eaplayerSetting' );
function admin_eaplayer_scripts() {  
    wp_enqueue_style( 'eaplayer-setting', PLAYER_URL . '/assets/css/setting.css', array(), PLAYER_VERSION, 'all' );  
}  
function eaplayerSetting() {
    add_menu_page('播放器设置页', 'Ea Player', 'manage_options', __FILE__, 'eaplayer_page');
}
function eaplayerOptions() {
    register_setting('eaplayer_setting_group', 'eaplayer_options');
}
function eaplayer_page() { 
    ?>
    <div class="eaplayer-page">
        <div class="eaplayer-page-inner">
            <section class="eaplayer-main">
                <h2 class="eaplayer-page-title">Ea Player Version <?php echo PLAYER_VERSION; ?></h2>
                <form method="post" action="options.php" class="sava-setting">
                    <?php settings_fields('eaplayer_setting_group'); $str = get_option('eaplayer_options');?>
                    <div class="block-one">
                        <div class="select-box">
                            <select id="ea-select" name="eaplayer_options[source]">
                                <option value="netease" <?php echo $str['source'] == 'netease' ? 'selected': ''; ?>>网易音乐</option>
                                <option value="tencent" <?php echo $str['source'] == 'tencent' ? 'selected': ''; ?>>QQ音乐</option>
                                <option value="xiami" <?php echo $str['source'] == 'xiami' ? 'selected': ''; ?>>虾米音乐</option>
                            </select>
                        </div>
                        <div class="select-box">
                            <select id="ea-select" name="eaplayer_options[type]">
                                <option value="0" <?php echo $str['type'] == 0 ? 'selected': ''; ?>>歌单</option>
                                <option value="1" <?php echo $str['type'] == 1 ? 'selected': ''; ?>>专辑</option>
                            </select>
                        </div>
                        <div class="input-box">
                            <input type="text" name="eaplayer_options[mid]" id="ea-mid" size="30" value="<?php echo !empty($str['mid'])?$str['mid']:''; ?>" placeholder="曲单ID">
                        </div>
                    </div>
                    <div class="block-two">
                        <ul class="color-list">
                            <li><input type="radio" name="eaplayer_options[color]" class="ea-color" value="#922542" <?php checked('#922542', $str['color']); ?> /><span style="background-color: #922542"></span></li>
                            <li><input type="radio" name="eaplayer_options[color]" class="ea-color" value="#7266ba" <?php checked('#7266ba', $str['color']); ?> /><span style="background-color: #7266ba"></span></li>
                            <li><input type="radio" name="eaplayer_options[color]" class="ea-color" value="#25928e" <?php checked('#25928e', $str['color']); ?> /><span style="background-color: #25928e"></span></li>
                            <li><input type="radio" name="eaplayer_options[color]" class="ea-color" value="#4e9225" <?php checked('#4e9225', $str['color']); ?> /><span style="background-color: #4e9225"></span></li>
                            <li><input type="radio" name="eaplayer_options[color]" class="ea-color" value="#255a92" <?php checked('#255a92', $str['color']); ?> /><span style="background-color: #255a92"></span></li>
                            <li><input type="radio" name="eaplayer_options[color]" class="ea-color" value="#92257f" <?php checked('#92257f', $str['color']); ?> /><span style="background-color: #92257f"></span></li>
                            <li><input type="radio" name="eaplayer_options[color]" class="ea-color" value="#333333" <?php checked('#333333', $str['color']); ?> /><span style="background-color: #333333"></span></li>
                        </ul>
                        <div class="color-custom">
                            <label>双色渐变：</label>
                            <label><input type="color" name="eaplayer_options[custom_color_1]" value="<?php echo $str['custom_color_1']; ?>"> + </label>
                            <label><input type="color" name="eaplayer_options[custom_color_2]" value="<?php echo $str['custom_color_2']; ?>"> = </label>
                            <label class="color-custom-radio" style="background: linear-gradient(to right,<?php echo $str['custom_color_1']?>,<?php echo $str['custom_color_2']?> 100%)"><span class="color-custom-demo" ></span><input type="radio" name="eaplayer_options[color]" class="ea-color" value="linear-gradient(to right,<?php echo $str['custom_color_1']?>,<?php echo $str['custom_color_2'];?> 100%)" <?php checked('linear-gradient(to right,'.$str['custom_color_1'].','.$str['custom_color_2'].' 100%)', $str['color']); ?> /></label>
                            <label title="选择新的颜色后需要再次选择并保存，否则新颜色不会生效。" style="margin-left:5px;">[💬]</label>
                        </div>
                    </div>
                    <div class="block-three">
                        <div class="autoplay">
                            <input type="checkbox" name="eaplayer_options[autoplay]" value="true" <?php checked('true',$str['autoplay']); ?> /><span>自动播放</span>
                        </div>
                        <div class="shuffle">
                            <input type="checkbox" name="eaplayer_options[shuffle]" value="true" <?php checked('true',$str['shuffle']); ?> /><span>随机播放</span>
                        </div>
                        <div class="mobile">
                            <input type="checkbox" name="eaplayer_options[mobile]" value="yes" <?php checked('yes',$str['mobile']); ?> /><span>开启移动端</span>
                        </div>
                        <input type="submit" name="save" class="button" value="保存设置" />
                    </div>
                    <div class="eaplayer-copyright"> Copyright &copy; 2018. Design By <a href="https://www.cssplus.org/" target="_blank">Louie</a></div>
                </form>
                <?php if ( isset($_REQUEST['settings-updated']) ) {
                    echo '<div id="message" class="updated"><p>设置更新成功。</p></div>';
                }?>
            </section>
        </div>
    </div>

<?php
}