module Taylor

  def sing(lyric)
    "♬#{lyric}♬"
  end

  def mmm_mmm(lyric)
    "#{lyric}, mmm-mmm"
  end

  def back_up(lyric, number_of_words)
    # missing code
  end

  IMAGES = [{ :head => ["................................................................................................................................................................",
  "....................................................................................   .......',,'..............................................................",
  "................................................................................        .......',,;;,'..........................................................",
  ".............................................................................          .......'',,,;:cc;,'......................................................",
  ".........................................................................    .     .........',;::cccclddo:,'....................................................",
  "..................................................................''...      .............',;:coxdddxxxdddc;''..................................................",
  "......................................................................     ......''',;;:::::ccldkOOkkOOOxddo:,''................................................",
  "......................................................................     ......';:cllodddddoodxOOOOOO00kdxdc;''...............................................",
  ".....................................................................  ..........,:lodxxkkkkkxkxxxkOOkkkOOkxxxo:,''.............................................",
  ".............................................................''......  ........''',cdxxkOOkkOOOOkkxdxkxddxOkxxxo:;,'............................................",
  "...........................................................................'',,;;:c::ldkkOOkkkOOOkkkxdddoodkkkkxdl;''...........................................",
  "................................................................'.......'',,;;;::coddooodxkkkkxxkOkkkxdoooodxkkkxxc,''.........................................."],
  :face => [".................................................................'.......',;::cclodxkOOOkxdddxxooxkkxxdooooookOOkxo:,'..........................................",
  "........................................................................''',;clooddxxxxkkxxdoooollooodddolooodOOOkdl;''.........................................",
  ".............................................................   .......',,::clooddddddolc:;;:::::ccccllooloddoxOOkxo:,'.........................................",
  ".............................................................    .........',;:lodxkOkxddoc::;,,,;;:::ccllloddddkOOkxl;'.........................................",
  ".........................................................'''..   ...''...',;;:cllooodddxdolc::;,'',,;;:cccloddddkOkxdc,'........................................",
  ".........................................................',,;'   .......''',,;;::cccclodooc:;;;;::;;;,,;:cclodddxkOkxo:,........................................",
  "........................................................',;:c,.  ....  ....',,,;;;;;;::::;;;;,'..';:::;,,;:ccoddoxkkxdl;'.......................................",
  "........................................................';;:c,. ...  ...  ..,:cccc:;;;,,,,'........;cc::;,,;:cddloxkkdoc'.......................................",
  "........................................................';;::,...'...','....,oxxxolccc::ldl,....'...'::;::,';:loc:lxkdol:'......................................",
  "........................................................';,;,....,;;;::ccc:,ck0OOkxxkxxddddooodxdo:'..,;;::,';cll;:dxxocc;'.....................................",
  ".........................................................';:,....,cloddddo:cxKKK0OOO000000000KKK00xc'..,,,;;'';cllcoddoc::,.....................................",
  "..........................................................,c:,'..':ldxxxdlcdKXXXK000KKKXXXXXXXXXXKOd;.....';,',:codooddl:;,.....................................",
  "..........................................................'cc;,...,codxxdld0XXXXXKK0KXXXXXXXXXXXKK0xl'.....';;;:cokxoddoc;,.....................................",
  "........................................................  .;c:;'...;codxdco0KXKKKKKKKXXXXXXXXXKKK0Okl,..,,'';:;;ldxxdxxxl:;.....................................",
  "........................................................   .::;,'..':lddo;.;loooodk0XXXXXXXXKKKK00Oxl;;cooc:ll;:odddkkkkol;.....................................",
  "........................................................   ..;:;,...;codo:,';coxxk0XNNXXXXXXXKKK00Oxc;lk0Oxxxl:cloox00Okxo:....................................."],
  :mouth => [ ".........................................................    .;::,..':clol::dkkOOKXNNXXXXXXXKKK00Okdlok000OOxlc:cllxOkxxxd:'....................................",
  ".........................................................     .,::'..,;;,....,;,,:coxkO0KKKKKK000OdodxkkOOkOxc;,;::ldooloo:'....................................",
  "..........................................................     ..';,..';'....',,;;,',:dkO0KK000Okoclooddddxkd:'',,';c::::c:,....................................",
  "....................................................................''.',...',,,,;;:ok0000000OOxl::cc:clloodxl,'...':cc;;cc:'...................................",
  ".........................................................................'''',,;;cox00KKK00Okxl;',ccccccloodxxo:'...,:oocllc:,..................................",
  "..................................................................'....  .;oxkOO0KXXXKKK0kxoc;'',;cclollodxkkkxo;'.''':dxoc:::,.................................",
  ".................................................  ..    .........'''...  .:xkOO00KK0Okdl:;;;;:::;:;cdxooxxkOOkdc,'''',:ooc,',,'................................",
  "    ..........  . ...........                                ..'....''.... ..,,,;:ccc:;,;;:cllllc:;'.:ddldkkOOOkd:;;,;,,,::,....................................",
  "                                                              .',....'''....   . ....',;:clodddol:;'..:lcldkkkkOkolc:,''',,,...................................."],
  :neck => ["                                                              ..;,..',''...'.........',:clodxxdolc;''.';::coxxxxkxoc,...'',,'...................................",
  "                                                              ..,,,,''','..',...''....';lodxxxxdoc;;,''',;;clddddd:'............................................",
  "                                                               .,,',,''','..;,.',:;'..':odxkkkkxolcc:;,'''',;:cllc,.............................................",
  "                                                               .''.'''',''..,,'':ol;'.,ldxkkOOkdlc;;;,'..... .';:;..............................................",
  "                                                                ......','. ...';cdo:,,codddocc::::::::;;,'... ..,'..............................................",
  "                                                                ......''.   ...';:;'..''...,coxO0KKKKKKK0Oxo;. ...   ...........................................",
  "                                                                 ..  ...               .':dO0KKKXXXNXXXXXXKK0o'.       .........................................",
  "                                                                                     .'lxO0KKXXXXNNNNNNNNNXXKKk:.       ........................................",
  "                                                                                   .,lxO00KKXXXXNNNWWNNNNNNXXXK0l.       .......................................",
  "                                                                                 .,lxkO00KKXXXXXNNWWWNNNNNNXXXXK0l.       ......................................",
  "                                                                              ..,lxkkO00KKKXXXXXNNNNNNNNNNXXXXXK0k,       ........        ..  ...........       ",
  "                                                                .           .,ldxkkO0000KKKKKXXXXXNNNNNNXXXXXKK0Ok;       .....                                 "],
  :shoulder => ["                                                             ....          'cdxkkOO0000KKKKKKKKXXXXXXXXXXXXKKK0OOk;        ...                                  ",
  "                                                          .';;;'         .:oxkOOO00000KKKKKKKKKKKKKKXXXXXKKKK00OOk,        .                                    ",
  "                                                         .:llc;.       .;ldxkOO000000KKKKKKKKKKKKKKKKKKKKKK000OOOx'                                             ",
  "                                                        .cool:.       .:odxkOO000000KKKKKKKKKKKKKKKKKK0000000OOOOo.                                             "]
  },
  {
  :head => ["XXXXXXXXXXXXXXXXXXXXXXXXXXXXKK0OkkxddddooooodxxkO0KKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "XXXXXXXXXXXXXXXXXXXXXXXXXXXKK0OkkxdooooooddddxkOO000KKKKKKKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "XXXXXXXXXXXXXXXXXXXXXXXXXXXK0OOkxdollooxkkkOkOOOOkkkxxxxxxkkO00KKKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "XXXXXXXXXXXXXXXXXXXXXXXXXXKK0OkkxdoooxkOOOkkkOkxxddddddooooooddkOO0KKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "XXXXXXXXXXXXXXXXXXXXXXXXXXKK00OkxdddkkkkkxxxkkkxxxxkkkkkkxxxxxdddxkOO0KXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "XXXXXXXXXXXXXXXXXXXXXXXXXXXK00OkxxxkkkkxkkkkkxxdolclodkO000OkxkkxxxxkkO0KXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "XXXXXXXXXXXXXXXXXXXXXXXXXXXKK0OkkxxxxxkOOOkxl:;,'''',;:dkOOO0OkkkkkxkkOOOKXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "XXXXXXXXXXXXXXXXXXXXXXXXXXXKK0OOkxddxxkOOkkdl:;,,,'....;dokOO0OkkkOOkkkOOO0KXXXXXXXXXXXXXXXXXXXXXXXX",
  "XXXXXXXXXXXXXXXXXXXXXXXXXXXXK0OxdooddxOOOOkkxddooolc::;;xddOk00OkkkkOOkOOO000KXXXXXXXXXXXXXXXXXXXXXX",
  "XXXXXXXXXXXXXXXXXXXXXXXXXXKK0OxoloooxkkkkOOOOOOOOkkxdoloxdoddxkO0kkxkOOkk00000XXXXXXXXXXXXXXXXXXXXXX"],
  :face => ["XXXXXXXXXXXXXXXXXXXXKKK000OOOdllloddxxxkkkOO00000OOkkxxxdolcldddkkxxdkkkkk000O0XXXXXXXXXXXXXXXXXXXXX",
  "KXXXXXXXXXXXXXXXXKKK0OOkxxxkdcclooooddxkkOOO00000OOkkxxdc:::colodxddodxxxxkOOkk0KXXKKXXXXXXXXXXXXXXX",
  "0KKKKXXXXXXXXXXXKK00Okxdlldo;;lllloooxkOOO0000OOOOkkxxo:,;;;:cclodoolldddodxddxk0XXKKXXXXXXXXXXXXXXX",
  "OOO00KKKKXXXXXXKK0OOkxoc:od;':lccllldkOO000000OOOOkkxl;'''',;::clllc:clolloolloxOXXKKKXXXXXXXXXXXXXK",
  "ddxkOO00KKKXXXKK00Okxo:;ldl';c::c:cdkOO00000OOOOOkkxo;''...',,;::::;,;::::c:::ldkOKKKKKXXXXXXXXXXXXK",
  ":cloxkO00KKKXXKK0Okxol:coo;,:;::cldkOO0OOkxdooddxxxdl;......'',;;;,,,',,,;;;;;codkO0XKKXXXXXXXXXXXXK",
  ",:cldkOO00KKKKK0Okxdl:;lolodocllloO00OOkxxxdol:;;clolc;.......',;,,'''',,;;,,;cloxk0KKKKKXXXXXXXXXKK",
  "';:codxkOO00000OOxdoc,:dooldxdooox000Okdo:,',,;;;;;clll:,'......',,,'..'';:,;;:cldx0KKKKKXXXXXXKKKKK",
  ".',:clodxxkkkkxxdol:,,odc:lxoodxkO00OOko:,....,;,;::codol:;,'.....',,,,,;:ollc::clxKKKKKKKKKKKK00000",
  "...'';;:cclllllcc:;'.:do,:dl:cdkO0000OOkkdlc::cc:;clodkxdl;''..........';codddooodOKKKKKKK00OOkkkxxx",
  "............'''''....cdl,,ooodkkkOO00OOOkxxdoolooodxxkOOxl:;,......  ...';:llodddkOKKKKK00Okkxdollcc",
  ".........       .....cdl;,oxkxxkkkOOOOOOOOkkkkkkkkkOOO00kdoooc:;;;,''...',.':cdkkO00KK00OOkxdol:;;,,",
  ".....            ...'colc;okkkxkkkkkkkkkkOOOOOOOOOOO00K0Oxdxxddooollllc;'....';coxO0KK0OOkxxdoollool",
  ".....            ...':occ:lxxdodkkkxxxxxkkkkkkkkkkO00K000kxxxkkxxxxxxxdd; ......,clxO000Okkxxxxxxxxx",
  ".....           ....':oocc:dxxookOkxxxxxxkkkkxxxxkOkxxkkxxxdxxxxxxdddddo' ..,;:c:;:ldk00Okkxxxkkkkkk",
  "....             ....:ddlc::ld:;kOkkxxxxxkkxxxxxxdl:cll:;coddxxddddoooo, ..';:lodollxkkOOkxxxxkkkkkk",
  "....             ....:xdolcllc;:xOkkxxxxxxxxxxkkkkxdoc:::lddddddooolll;. .',,:coodxodOOxkkxxxxxkkkkk",
  "..                ..'oxdol:,;cc:okkkxxxxxdddxxkOkkxdooodxxxxddddoolll:...,;;,;:codxxodkkxxxddddddddd"],
  :mouth => [".               ...,dkdoocc' .,;;oxxxxxdddolc::;,''',,,,coddoooooooo:..',,'..,:cloxkxodkxxxdoooooooo",
  ".              .:llxOkooocl;.  .,:dxxddddooodo::;,,,''''.',:cloooool'.'''....';codddxkxkkkxdooooooll",
  "              ..,okkxxooollc.  ..';lddddddddddoc;,,,,,,,;:llllooooc'.........,;cccoddxkOOkxxdoooooll",
  "            ...';dxdddoollol,...,,..;lodddxxxkxdoc:::::cloolllllc;.........'',:ccc:cldxkkkxxddoooooo",
  "            ...':ododollllol,..;:'.';ccloodxkkOOOkkkkkkkxdoolc:,.........',,,:olccc;;:lxxdddooooolll",
  ".             ..,odoolcccclc'';c;..;cllccclodxxxxxxxxxxxdolc;..  ........',,:dxoccl:cc:oollllccccccc",
  "'...           .;dxdol::ccl:,:lc'.':clllccccclllllllllllc:,'. .  ........'':dxo:lolcclclc;;;::::::::",
  ";;,'...        .'ldooc::cllloo:''',:cloollccc::::;;;;;;;,,'.......''''...':ooooloollcccl,..',;;:::::"],
  :neck => [";::;;'....      .',;:clccodol:..',,:cloollllcc:::::::::;;,'.......,;:;''.,codxddolllccl:...',,;:::::",
  ",,;;;;,,'...  ....'',:ooool:col:;;;:clloolllccccc:::::::;;...''',;::c::;;codddoolc::clc'...'',;;::;:",
  "'',,;;;;;,'....,;::cclodol:;,cdo::::cllooolllllccccccc:::,..'';::;;:ccooldxxxdlc:;cllc;,'''.'',;;;;;",
  "..''',,,,'''',:clooododdooc;;;cooc::clooooollllllllccccc:'.''',coc::looxddxkkOxcclllc::;,,''..''',''",
  "......''''',:clodxxxkkOOxdol:::cllccllooooooolllllllllll:'.....,:::clodxOkdddxOOxdollllc;,'.........",
  "........',;:clodxO0KKKK0Okxdolccclllllooddddoooolllllooo:,''...';cooooddk0OkxdddxOkdoooc:;'.........",
  "   ....';:clloxOKXXXKK000OOkxxdllllllloodddddooooooooodoc:;,,'.';cx00OO0KKK000OOkkOOxdlc:;'....     ",
  "     ..;ldkO0KXXXKKKKK00000OOkkxxddddddddddxddddddddddddllc:;;;coxO0KK000KK0KXXXXK00Okdl:;,....     ",
  ",lxOOO0KXXXXXKKKKKKKKKKKKK000OOkkkkkkkxxxxxxxxdxxdddxxxxodoolllodkOKXXK00OOO0XNNNNKKKK0xc,'....     "],
  :shoulder => ["WWWWWWWNXKK000OO000KKKKKKK0000OOOOOOOOOkkkkkkkxxxxxxxkkxdxxxdddddxOKXXXKK0OkdOXNNNXKKKKKkc'......   ",
  "XXNWWWWWWNK0OOOOO0000KKKKKKK00000OOOOOOOOOOOOOkkkkOOOkkkkkkOOOOOOOO00KKKKK0kdoKNNNNXK0000Ol.......  ",
  "K0KKNWWWWWNX0OOOO000KKKK0000000000000000000000OOOOOOOOOOOOO00XXXXK0OOO00000OxcxXNNNNX0OOOOxl'..     ",
  "K0000KNWWWWWN0OOO000KKKK000OOOOOOOOO000000000000000O00000000O0KXXXKK0000000OxllONNNNWXOkkxxxl..     ",
  "00000OKNWNNWWN0OO000KKKKKK00OOOOkkkkOOO00000000000000000000OOO0KKXKKKKKKKK00kdcdXNNNNN0xxxxxd,.     "]
  }
  ]
  module Boneyard
    EXES = [
      {
        :name     => "Brandon Borello",
        :inspired => ["Tim McGraw"]
      },
      {
        :name     => "Sam Armstrong",
        :inspired => ["Should've Said No"]
      },
      {
        :name     => "Joe Jonas",
        :inspired => ["Forever & Always", "Last Kiss", "Better than Revenge"]
      },
      {
        :name     => "Taylor Lautner",
        :inspired => ["Back to December"]
      },
      {
        :name     => "Jake Gyllenhaal",
        :inspired => ["We Are Never Ever Getting Back Together", "State of Grace", "All Too Well", "Girl at Home", "The Moment I Knew"]
      },
      {
        :name     => "John Mayer",
        :inspired => ["Dear John", "I Knew You Were Trouble"]
      },
      {
        :name     => "Conor Kennedy",
        :inspired => []
      },
      {
        :name     => "Harry Styles",
        :inspired => []
      },
      {
        :name     => "Lucas Till",
        :inspired => []
      },
      {
        :name     => "Cory Monteith",
        :inspired => ["Speak Now", "Mine"]
      },
      {
        :name     => "Eddie Redmayne",
        :inspired => []
      },
      {
        :name     => "Zac Efron",
        :inspired => []
      },
      {
        :name     => "Mr. Nobody",
        :inspired => []
      }
    ]

  end
end
