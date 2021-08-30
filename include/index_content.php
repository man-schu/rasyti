<embed src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1506195/keyboard-32-12.mp3" />

      <div id="metrics" style="float: right;">
        <span id="speed">0</span> cpm
        <span id="accuracy">0</span> errors
      </div>
<br>
      <form id="lessonSelector">
        <select id="lesson">
        
                  <!-- Non-Latin -->
          <option disabled> -- Non-Latin -- </option>
	  <option value="bulgarian">български 1 (Bulgarian)</option>
          <option value="bulgarian_long">български 2 (Bulgarian)</option>
          <option value="greek">Ελληνικά 1 (Greek)</option>
          <option value="greek2">Ελληνικά 2 (Greek)</option>
          <option value="greek3">Ελληνικά 3 (Greek)</option>
          <option value="russian">русский (Russian)</option>
          <option value="ukrainian">українська (Ukrainian)</option>


          <option disabled>  </option>
        
        
        <!-- Latin -->
          <option disabled> -- Latin-based -- </option>
          
          <option value="catalan">Català</option>
          <option value="czech">&#268;eština</option>
          <option value="danish">Dansk 1</option>
          <option value="danish2">Dansk 2</option>
          <option value="german">Deutsch 1</option>
          <option value="german2">Deutsch 2</option>
          <option value="german3">Deutsch 3</option>
          <option value="estonian" selected>Eesti</option>
          <option value="english" selected>English 1</option>
          <option value="english2" selected>English 2</option>
          <option value="spanish">Español 1</option>
          <option value="spanish2">Español 2</option>
          <option value="french">Français 1</option>
          <option value="french2">Français 2</option>
          <option value="french3">Français 3</option>
          <option value="irishgaelic">Gaeilge</option>
          <option value="croatian">Hrvatski</option>
          <option value="italian">Italiano</option>
          <option value="latvian">Latviešu</option>
          <option value="lithuanian">Lietuvių</option>
          <option value="maltese">Malti</option>
          <option value="hungarian">Magyar 1</option>
          <option value="hungarian_expert">Magyar 2</option>
          <option value="nederlands">Nederlands 1</option>
          <option value="nederlands2">Nederlands 2</option>
          <option value="nederlands_junior">Nederlands (junior)</option>
          <option value="norwegian">Norsk</option>
          <option value="polish">Polski</option>
          <option value="brazilian">Português (Brasil)</option>
          <option value="portuguese">Português (Portugal)</option>
          <option value="romanian">Română</option>
          <option value="slovak">Slovenčina (Slovak)</option>
          <option value="slovenian">Slovenski (Slovenian)</option>
          <option value="finnish">Suomi</option>
          <option value="finnish_for_kids">Suomi (junior)</option>
          <option value="swedish">Svenska</option>
          
 
<!--
          <option disabled>  </option>
          
          <option disabled> -- Dvorak -- </option>
          <option value="dvorak_ABCD">       dvorak (abcd)       </option>
          <option value="german.neo">        Deutsch (neo)       </option>
          <option value="dvorak">            English (dvorak)    </option>
          <option value="dvorak_es">         Español (dvorak-ES) </option>
          <option value="bepo">              Français (bépo)     </option>
          <option value="fr-dvorak-bepo-1">  Français (bépo-1)   </option>
          <option value="fr-dvorak-bepo-2">  Français (bépo-2)   </option>
-->          
        </select>
        <select id="level">
          <option value="-1"> (loading…) </option>
        </select>
      </form>

      <form id="lessonInput">
        <div id="hands"><span></span></div>
        <textarea id="txtPrompt" readonly></textarea>
        <textarea id="txtInput" spellcheck="false"></textarea>
      </form>



      <ul id="keyboard">
        <li id="row_AE">
          <ul>
            <li id="key_TLDE" class="left5">
              <strong class="deadKey"> ~ </strong>
              <em class="deadKey"> ` </em>
            </li>
            <li id="key_AE01" class="left5">
              <strong> ! </strong>
              <em> 1 </em>
            </li>
            <li id="key_AE02" class="left4">
              <strong> @ </strong>
              <em> 2 </em>
            </li>
            <li id="key_AE03" class="left3">
              <strong> # </strong>
              <em> 3 </em>
            </li>
            <li id="key_AE04" class="left2">
              <strong> $ </strong>
              <em> 4 </em>
            </li>
            <li id="key_AE05" class="left2">
              <strong> % </strong>
              <em> 5 </em>
            </li>
            <li id="key_AE06" class="right2">
              <strong class="deadKey"> ^ </strong>
              <em> 6 </em>
            </li>
            <li id="key_AE07" class="right2">
              <strong> & </strong>
              <em> 7 </em>
            </li>
            <li id="key_AE08" class="right3">
              <strong> * </strong>
              <em> 8 </em>
            </li>
            <li id="key_AE09" class="right4">
              <strong> ( </strong>
              <em> 9 </em>
            </li>
            <li id="key_AE10" class="right5">
              <strong> ) </strong>
              <em> 0 </em>
            </li>
            <li id="key_AE11" class="right5">
              <strong> _ </strong>
              <em> - </em>
            </li>
            <li id="key_AE12" class="right5">
              <strong> + </strong>
              <em> = </em>
              </li>
            <li id="key_BKSP" class="specialKey">
              <em> &#x2190; </em>
            </li>
          </ul>
        </li>
        <li id="row_AD">
          <ul>
            <li id="key_TAB" class="specialKey">
              <em> &#x21b9; </em>
            </li>
            <li id="key_AD01" class="left5">
              <strong> Q </strong>
              <em> q </em>
            </li>
            <li id="key_AD02" class="left4">
              <strong> W </strong>
              <em> w </em>
            </li>
            <li id="key_AD03" class="left3">
              <strong> E </strong>
              <em> e </em>
            </li>
            <li id="key_AD04" class="left2">
              <strong> R </strong>
              <em> r </em>
            </li>
            <li id="key_AD05" class="left2">
              <strong> T </strong>
              <em> t </em>
            </li>
            <li id="key_AD06" class="right2">
              <strong> Y </strong>
              <em> y </em>
            </li>
            <li id="key_AD07" class="right2">
              <strong> U </strong>
              <em> u </em>
            </li>
            <li id="key_AD08" class="right3">
              <strong> I </strong>
              <em> i </em>
            </li>
            <li id="key_AD09" class="right4">
              <strong> O </strong>
              <em> o </em>
            </li>
            <li id="key_AD10" class="right5">
              <strong> P </strong>
              <em> p </em>
            </li>
            <li id="key_AD11" class="right5">
              <strong> { </strong>
              <em> [ </em>
            </li>
            <li id="key_AD12" class="right5">
              <strong> } </strong>
              <em> ] </em>
            </li>
            <li id="key_BKSL" class="right5">
              <strong> | </strong>
              <em> \ </em>
            </li>
          </ul>
        </li>
        <li id="row_AC">
          <ul>
            <li id="key_CAPS" class="specialKey">
              <em> &#x21ea; </em>
            </li>
            <li id="key_CAPS105" class="hiddenKey">
              &nbsp;
            </li>
            <li id="key_AC01" class="left5">
              <strong> A </strong>
              <em> a </em>
            </li>
            <li id="key_AC02" class="left4">
              <strong> S </strong>
              <em> s </em>
            </li>
            <li id="key_AC03" class="left3">
              <strong> D </strong>
              <em> d </em>
            </li>
            <li id="key_AC04" class="left2">
              <strong> F </strong>
              <em> f </em>
            </li>
            <li id="key_AC05" class="left2">
              <strong> G </strong>
              <em> g </em>
            </li>
            <li id="key_AC06" class="right2">
              <strong> H </strong>
              <em> h </em>
            </li>
            <li id="key_AC07" class="right2">
              <strong> J </strong>
              <em> j </em>
            </li>
            <li id="key_AC08" class="right3">
              <strong> K </strong>
              <em> k </em>
            </li>
            <li id="key_AC09" class="right4">
              <strong> L </strong>
              <em> l </em>
            </li>
            <li id="key_AC10" class="right5">
              <strong> : </strong>
              <em> ; </em>
            </li>
            <li id="key_AC11" class="right5">
              <strong class="deadKey"> " </strong>
              <em class="deadKey"> ´ </em>
            </li>
            <li id="key_RTRN" class="specialKey">
              <em> &#x21b2; </em>
            </li>
            <li id="key_RTRN105" class="hiddenKey">
              &nbsp;
            </li>
          </ul>
        </li>
        <li id="row_AB">
          <ul>
            <li id="key_LFSH" class="specialKey">
              <em> &#x21e7; </em>
            </li>
            <li id="key_LSGT" class="left5">
              <strong> \ </strong>
              <em> | </em>
            </li>
            <li id="key_AB01" class="left5">
              <strong> Z </strong>
              <em> z </em>
            </li>
            <li id="key_AB02" class="left4">
              <strong> X </strong>
              <em> x </em>
            </li>
            <li id="key_AB03" class="left3">
              <strong> C </strong>
              <em> c </em>
            </li>
            <li id="key_AB04" class="left2">
              <strong> V </strong>
              <em> v </em>
            </li>
            <li id="key_AB05" class="left2">
              <strong> B </strong>
              <em> b </em>
            </li>
            <li id="key_AB06" class="right2">
              <strong> N </strong>
              <em> n </em>
            </li>
            <li id="key_AB07" class="right2">
              <strong> M </strong>
              <em> m </em>
            </li>
            <li id="key_AB08" class="right3">
              <strong> &lt; </strong>
              <em> , </em>
            </li>
            <li id="key_AB09" class="right4">
              <strong> &gt; </strong>
              <em> . </em>
            </li>
            <li id="key_AB10" class="right5">
              <strong> ? </strong>
              <em> / </em>
            </li>
            <li id="key_RTSH" class="specialKey">
              <em> &#x21e7; </em>
            </li>
          </ul>
        </li>
        <li id="row_AA">
          <ul>
            <li id="key_LCTL" class="specialKey">
              <em> ctrl </em>
            </li>
            <li id="key_LWIN" class="specialKey">
              <em> super </em>
            </li>
            <li id="key_LALT" class="specialKey">
              <em> Alt </em>
            </li>
            <li id="key_SPCE" class="thumb">
              <em> </em>
            </li>
            <li id="key_RALT" class="specialKey">
              <em> AltGr </em>
            </li>
            <li id="key_RWIN" class="specialKey">
              <em> super </em>
            </li>
            <li id="key_MENU" class="specialKey">
              <em> menu </em>
            </li>
            <li id="key_RCTL" class="specialKey">
              <em> ctrl </em>
            </li>
          </ul>
        </li>
      </ul>

      <form id="keyboardSelector">
        <dl>
          <dt> keyboard layout: </dt>
          <dd>
            <select id="layout">
              <option> azerty </option>
              <option selected> qwerty </option>
              <option> qwertz </option>
              <option value="cyrillic"> Cyrillic </option>
              <option> dvorak </option>
                          </select>
            <select id="variant" style="width: 210px;">
              <option value="default"> (loading…) </option>
            </select>
          </dd>
          <dt> keyboard shape: </dt>
          <dd>
            <select id="shape">
              <option value="tmx"> ergonomic </option>
              <option value="pc104" selected> pc104 / ANSI </option>
              <option value="pc105"> pc105 / ISO </option>
              <option value="pcrus"> Russian </option>
            </select>
            <input id="hints" type="checkbox">
            <label for="hints"> show hints </label><a href="remarks.html#hintskblayout" target="_blank"><span class="remark">&#9432;</span></a>

            

          </dd>
        </dl>
      </form>
