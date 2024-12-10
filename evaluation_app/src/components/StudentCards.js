import React from "react";
import Card from "./Card";
import InfoCard from "./InfoCard";
function StudentCards({color}) {

  const group_svg = (
    <>
    <path d="M828.33492,244.95227l-2.71537,21.6217-6.73908,53.70394h-135.38272c1.05718-12.03676,2.50247-29.36207,4.04646-48.06508,.15218-1.86793,.31188-3.74756,.46397-5.63886,3.87162-47.01432,8.10823-100.21632,8.10823-100.21632l17.79852,3.31574,34.53207,6.42112,14.07147,2.61514,37.68114,7.01655c18.78727,3.49074,31.7102,30.69301,28.13532,59.22608Z" fill="#f2f2f2"/><polygon points="725.93018 79.35764 742.57875 108.4915 710.5803 131.16867 696.93018 95.35764 725.93018 79.35764" fill="#ffb6b6"/><circle cx="704.73531" cy="65.67545" r="41.24406" fill="#ffb6b6"/><path d="M701.77389,74.8959c-3.27492-4.9842-1.98953-7.59113-4.73126-9.42283-.00005-.00005-1.10331-.7371-8.99943-1.15733h0c-1.76783-12.72387-3.9747-14.26689-3.97475-14.26694-2.54344-1.77835-6.31806-1.20052-8.66632-.11286-4.96648,2.3004-4.39069,7.26947-7.73471,8.22036-4.61947,1.31356-13.02411-6.09155-13.85211-14.56892-.67539-6.91516,3.77981-13.63146,5.54692-13.27617,1.75207,.35229,5.94686-5.00298,8.2118-4.92038,1.54677,.05641,7.86668-2.69052,9.56681-2.47576,1.85668,.23458,7.97849,3.42925,8.23359,2.69936,1.77276-5.07201,1.25174-6.47929,2.75595-7.93028,2.66541-2.57115,7.02574-.78067,13.86612,.18057,14.07429,1.97776,16.5307-2.66296,23.74347,.48255,3.64355,1.58896,6.69229,5.8742,12.64108,14.3798,8.31932,11.89498,12.47896,17.84248,12.50565,24.77939,.02721,7.0744-3.3985,6.62532-4.90327,17.09838-1.67502,11.65826,1.88393,16.98908-2.00412,20.77661-3.00495,2.92729-9.11284,3.62215-12.32198,1.05303-5.49439-4.39856,1.69602-15.0123-4.38413-22.76671-3.73224-4.75997-11.23802-6.87793-14.67632-4.52502-3.88767,2.66043-1.74599,10.46929-4.47987,11.20979-2.3411,.63413-5.77242-4.58808-6.34311-5.45663Z" fill="#2f2e41"/><path d="M797.8501,237.33762c-1.15039,19.66992-5.71973,25.87988-7.32031,49.10986-.34961,5.1001-.55957,11.02002-.55957,18.08008,0,1.7998,.00977,3.54004,.00977,5.24023,0,3.61963-.06934,7.04004-.49023,10.50977-.31934,2.77002-.86914,5.56006-1.7793,8.5h-88.83008c-.00977-.02002-.00977-.04004-.02051-.06006-.51953-2.25977-.84961-4.41992-1.09961-6.48975-.08008-.66016-.15039-1.31006-.20996-1.9502-.08008-.75-.15039-1.48975-.21973-2.21973-.27051-2.91016-.54004-5.66016-1.18066-8.29004-.85938-3.63037-2.41992-7.05029-5.62012-10.3501-1.30957-1.3501-2.61914-2.3999-3.89941-3.31982-.25-.17041-.49023-.34033-.74023-.51025-3.54004-2.43018-6.88965-4.18018-9.79004-9.14014-.0498-.06982-.08984-.1499-.12988-.21973-.5-.87012-1.7998-3.15039-2.74023-6.18994-.99023-3.16016-1.58984-7.13037-.50977-11.18994,2.57031-9.62012,12.08984-10.58008,19.87012-20.30029,.83984-1.0498,1.66992-2.20996,2.45996-3.5,3.51953-5.72021,4.46973-10.75977,5.58984-16.75,.17969-.97021,.33984-1.93018,.46973-2.85986,.10059-.7002,.19043-1.39014,.26074-2.07031,.61914-5.70996,.31934-10.62988-.41016-15.02979-2.37988-14.41016-9.40039-23.33008-4.44043-36.26025,1.56055-4.05957,3.77051-7.10986,6-9.71973,4.71973-5.53027,9.57031-9.12012,8.73047-16.25977-.85059-7.2002-6.31055-8.19043-6.91992-14.48047-.31055-3.17969,.72949-6.52979,2.67969-9.81982v-.00977c6.24023-10.59033,21.82031-20.34033,31.71973-20.03027,1.83008,.05029,3.4502,.45996,4.7998,1.25,4.89062,2.87988,2.85059,9.16992,10.34082,17.99023,5.56934,6.5498,11.86914,9.16992,14.25977,10.40967,9.46973,4.94043,17.16992,19.51025,22.39941,38.14014,.04004,.14014,.08008,.27979,.12012,.43018,3.23047,11.66992,5.51074,24.91992,6.64062,38.35986,.47949,5.68994,.75977,11.41016,.81934,17.06982,.05078,4.52002-.0498,8.44043-.25977,11.93018Z" fill={color}/><g><polygon points="731.33057 304.72776 729.52002 309.7678 728.38037 312.92747 725.73975 320.27756 722.68018 328.77756 703.01025 328.77756 706.31006 320.27756 707.84033 316.3176 710.38037 309.7678 714.64014 298.7678 731.33057 304.72776" fill="#ffb6b6"/><path d="M790.84033,167.82737c-.0498,.65039-.12012,1.37012-.19043,2.15039-.7793,7.93994-2.62012,22.1499-5.30957,38.35986-1.41992,8.5498-3.08008,17.66016-4.9502,26.70996-4.01953,19.52979-9.01953,38.76025-14.66992,51.3999-1.00977,2.28027-2.0498,4.34033-3.11035,6.16016-.80957,1.39014-1.66016,2.75977-2.5498,4.10986-2.87988,4.43018-6.11035,8.63037-9.45996,12.55029-.12988,.16992-.28027,.33008-.42969,.5-.54004,.63965-1.10059,1.27002-1.66016,1.8999-2.74023,3.08984-5.54004,5.96973-8.25,8.60986-3.2998,3.22021-6.48047,6.07031-9.33008,8.5h-31.94043l-.12988-.06006-4.59961-2.04004s1.30957-1.54004,3.5-4.44971c.4502-.59033,.92969-1.24023,1.4502-1.9502,.63965-.87012,1.33008-1.83008,2.06934-2.87012,1.54004-2.17969,3.29004-4.73975,5.16992-7.63965,3.64062-5.61035,7.79004-12.51025,11.98047-20.5,.48047-.93018,.96973-1.87012,1.45996-2.82031,.00977-.02979,.03027-.06006,.04004-.08984,.83008-1.62012,1.65039-3.29004,2.46973-4.99023,6.9502-14.45996,8.94043-26.45996,9.51074-30.34961,.7998-5.5,1.90918-13.19043,1.60938-21.65039-.2002-5.57959-1.00977-11.47998-2.93945-17.33984v-.00977c-.40039-1.22998-.85059-2.45996-1.36035-3.68018-.91016-2.18994-1.99023-4.3501-3.27051-6.47998-5.64941-9.37988-10.23926-9.77002-13.88965-19.99023-1.08008-3.02979-3.53027-9.86963-2.78027-17.08984v-.00977c.09082-.89014,.24023-1.79004,.44043-2.69043v-.00977c.0498-.25,.12012-.50977,.19043-.75977,.56934-2.20996,1.50977-4.40039,2.93945-6.48047,2.79004-4.03955,6.59961-6.43994,10.00977-7.86963l.01074-.01025c3.93945-1.63965,7.33984-1.98975,8-2.0498,14.60938-1.2998,25.93945,10.97998,32.12988,17.68994,2.38965,2.58984,4.58008,4.76025,6.58008,6.52979,15.56934,13.90039,19.83984,5.02002,20.94922,.43018,.16992-.70996,.26074-1.31982,.31055-1.72021Z" fill={color}/><path d="M790.89014,167.30784c0,.0498-.00977,.21973-.0498,.5,.01953-.15039,.03027-.30029,.04004-.44043,0-.02979,0-.0498,.00977-.05957Z" fill={color}/></g><path d="M711.47021,378.3176H175.42041c-4.98047,0-9.04004,4.0498-9.04004,9.03027,0,4.98975,4.05957,9.03955,9.04004,9.03955H711.47021c4.97949,0,9.03027-4.0498,9.03027-9.03955,0-4.98047-4.05078-9.03027-9.03027-9.03027Z" fill="#e6e6e6"/><path d="M592.51025,424.99778H294.37012c-4.97998,0-9.02979,4.0498-9.02979,9.02979s4.0498,9.04004,9.02979,9.04004h298.14014c4.97998,0,9.04004-4.06006,9.04004-9.04004s-4.06006-9.02979-9.04004-9.02979Z" fill="#e6e6e6"/><polygon points="235.06941 81.27476 268.85306 67.05703 283.34352 96.76248 247.84188 111.25294 235.06941 81.27476" fill="#ffb6b6"/><polygon points="235.06941 81.27476 268.85306 67.05703 283.34352 96.76248 247.84188 111.25294 235.06941 81.27476" opacity=".1"/><path d="M239.87213,69.95512l33.32807,38.39973s-23.18474,73.17685-46.36949,79.69756-65.93162,38.39973-65.93162,38.39973l-53.61472-34.77712,26.08284-38.39973s63.03352-86.21827,79.69756-86.21827c16.66403,0,26.80736,2.89809,26.80736,2.89809Z" fill={color}/><path d="M194.84299,320.2779H117.26107l-4.90504-6.55697-20.02583-26.7711-4.60796-6.15845s-17.38856-31.87902-13.76594-60.85995c3.62262-28.98093,41.29783-35.50164,41.29783-35.50164h1.55049l46.12313,40.52979-2.75318,37.71872,14.60637,24.27153,20.06205,33.32807Z" fill="#2f2e41"/><polygon points="133.14986 320.2779 112.35603 320.2779 112.35603 289.48566 133.14986 320.2779" fill="#2f2e41"/><path d="M581.64421,273.53165l-2.58651,13.41818-6.41927,33.32807h-128.95789c1.00701-7.46988,2.38371-18.22178,3.85442-29.82865,.14496-1.15922,.29708-2.32569,.44195-3.49942,3.68789-29.17657,7.72344-62.19314,7.72344-62.19314l16.95386,2.05771,32.89328,3.98488,13.40368,1.62293,35.89291,4.35439c17.89569,2.16632,30.20533,19.04774,26.80011,36.75505Z" fill="#f2f2f2"/><path d="M764.14438,320.2779h-69.94541c1.06503-1.25341,1.66635-1.97793,1.66635-1.97793l20.96775-3.46324,43.20324-7.12937s1.97068,5.09342,4.10808,12.57055Z" fill="#2f2e41"/><polygon points="467.45495 95.76626 497.87302 138.78423 444.81392 140.36878 439.11853 99.94198 467.45495 95.76626" fill="#a0616a"/><polygon points="467.45495 95.76626 497.87302 138.78423 444.81392 140.36878 439.11853 99.94198 467.45495 95.76626" opacity=".1"/><path id="uuid-ae755ff6-bb09-410e-86b1-7d1b81a37005-12781" d="M317.44601,184.89638c-3.90299-11.25913-12.8761-18.37174-20.04107-15.88668-7.16497,2.48507-9.80758,13.62542-5.90169,24.88804,1.49853,4.52036,4.05781,8.61612,7.46374,11.94459l17.13959,47.49655,22.1173-8.51819-19.24476-45.91882c.61482-4.72396,.08913-9.52647-1.53311-14.0055Z" fill="#a0616a"/><path d="M523.34731,162.97667l-.04173,43.84082-4.07898,16.19317-8.39004,33.30631-6.10768,30.63286-4.55003,22.82248-1.62293,8.15089c-1.22449,.81871-2.44173,1.60117-3.65888,2.3547h-105.97603c-6.02079-3.61536-9.38979-6.42652-9.38979-6.42652,0,0,1.66639-1.56499,3.57189-4.07907,3.21689-4.2457,7.10757-11.2011,4.72391-17.84501-.49992-1.39112-.63033-3.08648-.47821-4.97747,.97088-12.47627,14.05577-33.57447,14.05577-33.57447l-2.70971-31.31387-1.18823-13.72243,8.37769-66.9101,27.30728-15.87424,4.71449-.45614,46.53611-2.51407,19.23434,1.10845,.87664,.23915,18.79409,39.04457Z" fill="#ccc"/><g><polygon points="525.41397 320.2779 502.22923 320.2779 501.20763 309.77232 501.18587 309.56218 507.75009 309.11297 524.82716 307.9465 525.12415 314.23531 525.35604 319.06075 525.41397 320.2779" fill="#ffb6b6"/><path d="M531.12143,173.57645l9.73934,57.14315-7.948,56.23024-1.23891,8.75221-2.18807,15.45405-.67376,4.75291,.02176,.51438,.16663,3.85451h-27.53188l-1.01444-10.50559-.08685-.94192-2.07221-21.51831-.03617-.36226-4.39782-45.63046,8.62176-32.98031,.63767-2.42722v-.00716l3.75119-56.46939-2.90535-25.66256-.02892-.23915c.05793,.03626,.1087,.07252,.16663,.1087,.15221,.09419,.30433,.18838,.4492,.28983,16.92485,10.73748,27.01025,29.57509,26.56821,49.64435Z" fill="#ccc"/></g><path d="M415.74779,152.37881l-10.58745-10.95064s-22.66445,10.21757-23.79416,15.88619c-1.12971,5.66862-41.14649,88.92555-41.14649,88.92555l-17.40981-46.49871-22.66197,15.13029s18.1839,72.19186,35.18976,75.58099,74.00173-85.44603,74.00173-85.44603l6.40838-52.62764Z" fill="#ccc"/><path d="M845.64014,286.44749H21.16016c-11.66992,0-21.16016,9.5-21.16016,21.16992s9.49023,21.16016,21.16016,21.16016H845.64014c11.66992,0,21.16992-9.48975,21.16992-21.16016s-9.5-21.16992-21.16992-21.16992Z" fill="#e6e6e6"/><path d="M518.52213,221.93974l-1.60291,74.80242c-.15517,7.24107-6.06962,13.03015-13.31236,13.03015h-137.60256c-7.07149,0-12.90955-5.52763-13.29556-12.58857l-4.08931-74.80242c-.41702-7.62814,5.65604-14.04226,13.29556-14.04226h143.29478c7.46556,0,13.4723,6.13683,13.31236,13.60068Z" fill="#3f3d56"/><circle cx="296.38479" cy="66.40952" r="32.92181" fill="#ffb6b6"/><polygon points="241.32117 152.55077 244.94379 191.67503 269.57758 290.93471 248.29569 298.39388 212.34024 190.22598 207.37412 146.75458 241.32117 152.55077" fill="#ffb6b6"/><path d="M231.52213,221.93974l-1.60291,74.80242c-.15517,7.24107-6.06962,13.03015-13.31236,13.03015H79.0043c-7.07149,0-12.90955-5.52763-13.29556-12.58857l-4.08931-74.80242c-.41702-7.62814,5.65604-14.04226,13.29556-14.04226H218.20977c7.46556,0,13.4723,6.13683,13.31236,13.60068Z" fill="#3f3d56"/><ellipse cx="273.50003" cy="298.7779" rx="26" ry="11.5" fill="#ffb6b6"/><path d="M190.24228,158.53237l14.85273-79.15844s41.29783-5.79619,42.74687,7.96976-1.03544,81.04198-1.03544,81.04198l-56.56416-9.85329Z" fill={color}/><path d="M283.09522,71.58597s20.36536-7.26838,28.95593-11.17911c8.59056-3.91073,25.65708,23.36637,26.03673,8.96042,.37965-14.40595-5.51755-20.44717-5.51755-20.44717,0,0-1.4726-31.51507-33.2233-27.57494,0,0,6.98375-15.76734-15.94076-18.20547-22.92451-2.43813-58.58934,52.92097-55.39531,61.19409,3.19403,8.27312,7.02295,15.11285-2.03888,23.95865-9.06183,8.8458-26.03033,58.76917-13.11998,72.20319,12.91035,13.43402,13.7575,19.26357,4.91188,27.62122-8.84562,8.35765-29.75425,26.53032-7.14719,29.68515,22.60706,3.15483-2.06828,.79851,14.7856-14.0263,16.85389-14.82481,41.44742-14.21933,32.26457-38.00455-9.18284-23.78522,6.77112-57.86925,4.77485-63.03995-1.99627-5.1707,4.4726-38.00496,4.4726-38.00496,0,0,15.05504-2.21189,16.1808,6.85974Z" fill="#2f2e41"/><g><circle cx="451.19104" cy="75.49881" r="35.83777" fill="#a0616a"/><path d="M454.05121,27.31743c-1.037,.60534-2.42604-.31053-2.75855-1.46432-.33251-1.1538,.05482-2.37882,.43892-3.51648l1.93363-5.72716c1.37137-4.06183,2.82687-8.26559,5.79693-11.35717,4.48283-4.66624,11.6071-5.85331,18.02037-4.99332,8.2359,1.1044,16.36189,5.56405,20.19135,12.93866,3.82945,7.37462,2.19911,17.66485-4.72046,22.26586,9.8619,11.30338,13.2996,23.9006,12.7568,38.89155-.5428,14.99095-16.87927,28.78752-27.53282,39.34806-2.37913-1.4422-4.54204-8.20095-3.23373-10.65626,1.3083-2.45531-.5662-5.29986,1.05409-7.56146,1.62029-2.2616,2.97587,1.33954,1.33779-.90922-1.03366-1.41901,3.00067-4.68353,1.46421-5.53283-7.43161-4.10794-9.9033-13.37111-14.57083-20.46464-5.62991-8.55611-15.26549-14.35039-25.46249-15.31167-5.61717-.52953-11.55014,.42955-16.15432,3.69062-4.60418,3.26106-7.5849,9.08853-6.51724,14.62867-2.76507-2.80756-4.14147-6.92204-3.62233-10.82826,.51914-3.90621,2.92243-7.51837,6.32483-9.50626-2.06881-6.84142-.29652-14.71105,4.50527-20.00518,4.80179-5.29413,24.28048-4.39244,31.29074-2.99911l-.54217-.93008Z" fill="#2f2e41"/><path d="M455.13987,53.47472c9.28487,1.0023,15.9888,9.04506,21.64971,16.47254,3.26282,4.28103,6.68059,9.00871,6.59868,14.39076-.08282,5.4414-3.72095,10.10859-5.45967,15.26538-2.84199,8.42894-.07214,18.45744,6.69308,24.23289-6.68479,1.26852-13.91123-3.74373-15.06525-10.44924-1.34341-7.80603,4.57394-15.34005,3.87313-23.22978-.61741-6.95094-6.09506-12.30052-10.75187-17.49772-4.65681-5.19721-9.03036-12.09377-6.88799-18.73508l-.64983-.44975Z" fill="#2f2e41"/></g><g><path id="uuid-aec20554-f6ec-4c5b-9d97-717cd04239bf-12782" d="M593.94738,290.97732c-9.19677,5.23093-13.95249,14.21631-10.62254,20.06865,3.32996,5.85234,13.48327,6.3548,22.68262,1.12078,3.70344-2.04037,6.86441-4.93798,9.21841-8.4504l38.6872-22.65576-11.01865-17.92815-36.96889,24.23796c-4.22349,.22844-8.33082,1.46525-11.97815,3.60692Z" fill="#ffb6b6"/><path d="M724.9347,124.84081c-1.15613-.45818-11.30029-4.29973-20.56133,.77222-10.63836,5.8263-12.28141,19.12643-12.85772,23.79133-1.33125,10.77601,2.59074,13.19133,3.41866,24.10068,1.54899,20.4102,5.63336-2.8739-.88939,6.44247-2.2578,3.22481-25.31723,53.19804-38.03446,62.98648-24.73342,19.03731-40.43943,32.44418-40.43943,32.44418l17.93045,19.47744s28.33331-7.54935,53.37617-23.81018c25.68825-16.67995,38.53244-25.0199,48.46938-41.33509,.85574-1.40497,21.33113-36.17595,10.33482-74.6244-2.50819-8.76995-7.10385-24.83851-20.74714-30.24513Z" fill={color}/></g><path d="M817.52213,221.93974l-1.60291,74.80242c-.15517,7.24107-6.06962,13.03015-13.31236,13.03015h-137.60256c-7.07149,0-12.90955-5.52763-13.29556-12.58857l-4.08931-74.80242c-.41702-7.62814,5.65604-14.04226,13.29556-14.04226h143.29478c7.46556,0,13.4723,6.13683,13.31236,13.60068Z" fill="#3f3d56"/>
    </>
  );


  const add_and_manage_student_svg = (
    <>
    <path d="M970.1131,720.7499c.096-.28809,9.41382-29.11865-7.07739-54.84473l-1.6836,1.0791c15.96338,24.90332,6.9563,52.8545,6.86353,53.13379Z" transform="translate(-97.21873 -175.65252)" fill="#e4e4e4"/><path d="M951.24342,669.60483a13.11313,13.11313,0,1,0,25.66181-5.41187c-1.49445-7.08631-14.16421-24.72239-21.25053-23.22794S949.749,662.51852,951.24342,669.60483Z" transform="translate(-97.21873 -175.65252)" fill="#e4e4e4"/><path d="M953.63276,702.748c6.32428,6.83412,17.63826,6.64871,17.63826,6.64871s1.06029-11.26571-5.264-18.09983-17.63825-6.64871-17.63825-6.64871S947.30848,695.91386,953.63276,702.748Z" transform="translate(-97.21873 -175.65252)" fill="#e4e4e4"/><path d="M1049.48888,722.7499c.22642-.67986,22.2159-68.71783-16.70212-129.42943l-3.97315,2.5466c37.67237,58.77,16.41634,124.73262,16.1974,125.39174Z" transform="translate(-97.21873 -175.65252)" fill="#e4e4e4"/><path d="M1004.95786,602.05139a30.946,30.946,0,0,0,60.55993-12.77162c-3.52678-16.72316-33.42648-58.343-50.14964-54.81618S1001.43107,585.32822,1004.95786,602.05139Z" transform="translate(-97.21873 -175.65252)" fill="#e4e4e4"/><path d="M1010.59652,680.26672c14.92482,16.128,41.625,15.69046,41.625,15.69046s2.50221-26.58623-12.42261-42.71424-41.625-15.69046-41.625-15.69046S995.67169,664.13871,1010.59652,680.26672Z" transform="translate(-97.21873 -175.65252)" fill="#e4e4e4"/><path d="M677.31479,717.62706l-14.5923-6.1443-10.01026-73.15138H519.40762L508.55725,711.1839l-13.05512,6.52746a3.10016,3.10016,0,0,0,1.38657,5.873H676.11213A3.1,3.1,0,0,0,677.31479,717.62706Z" transform="translate(-97.21873 -175.65252)" fill="#e6e6e6"/><path d="M914.20621,648.06385H259.377a12.97344,12.97344,0,0,1-12.9443-12.97332V542.751h680.7178v92.33952A12.97356,12.97356,0,0,1,914.20621,648.06385Z" transform="translate(-97.21873 -175.65252)" fill="#ccc"/><path d="M927.835,586.39288h-682V191.29161a15.6572,15.6572,0,0,1,15.63964-15.63909H912.1952A15.65735,15.65735,0,0,1,927.835,191.29161Z" transform="translate(-97.21873 -175.65252)" fill="#3f3d56"/><path d="M887.106,204.32813h-600.54a12.06487,12.06487,0,0,0-12.0498,12.06v329.27a12.06487,12.06487,0,0,0,12.0498,12.06h600.54a12.07157,12.07157,0,0,0,12.05029-12.06v-329.27A12.07157,12.07157,0,0,0,887.106,204.32813Z" transform="translate(-97.21873 -175.65252)" fill="#fff"/><path d="M393.01613,204.32813v353.39H286.56593a12.06487,12.06487,0,0,1-12.0498-12.06v-329.27a12.06487,12.06487,0,0,1,12.0498-12.06Z" transform="translate(-97.21873 -175.65252)" fill="#f0f0f0"/><path d="M305.19648,382.84914a8.40614,8.40614,0,0,0-10.26268,7.799l-28.6532,8.44748,11.86177,10.01357,25.391-9.55705a8.45167,8.45167,0,0,0,1.66308-16.703Z" transform="translate(-97.21873 -175.65252)" fill="#ffb6b6"/><path d="M189.42383,446.42383a11.952,11.952,0,0,1-3.80811-23.27588l58.064-19.6001,45.29248-16.5,5.5581,19.45508-39.98388,26.34668-62.62354,13.311A12.02473,12.02473,0,0,1,189.42383,446.42383Z" transform="translate(-97.21873 -175.65252)" fill={color}/><polygon points="128.541 538.792 136.693 538.792 140.572 507.347 128.539 507.347 128.541 538.792" fill="#ffb6b6"/><path d="M223.67984,711.78319l16.0552-.00065h.00065A10.23221,10.23221,0,0,1,249.96733,722.014v.33248l-26.287.001Z" transform="translate(-97.21873 -175.65252)" fill="#2f2e41"/><polygon points="66.033 538.792 74.185 538.792 78.064 507.347 66.032 507.347 66.033 538.792" fill="#ffb6b6"/><path d="M161.1721,711.78319l16.05521-.00065h.00065A10.23219,10.23219,0,0,1,187.45959,722.014v.33248l-26.287.001Z" transform="translate(-97.21873 -175.65252)" fill="#2f2e41"/><path d="M163.171,525.829a43.78435,43.78435,0,0,0-2.32742,27.54938l-2.32741,155.984h17.9046l10.02438-85.78189,16.6244-56.523,17.95435,43.88841v91.47083l17.28937-1.03411,9.30966-97.08648-10.63961-69.15749Z" transform="translate(-97.21873 -175.65252)" fill="#2f2e41"/><path d="M228.67108,404.47092l-15.29444-4.65484-3.98986-7.97971H189.74119l-4.95852,8.64469s-19.94927,7.31473-20.61425,42.55846-3.32488,91.76667-3.32488,91.76667l78.66089,11.21416Z" transform="translate(-97.21873 -175.65252)" fill={color}/><path d="M251.2538,539.70888A8.40612,8.40612,0,0,0,245.759,528.049l-2.30564-29.78338-12.26093,9.52066,4.06921,26.82319a8.45167,8.45167,0,0,0,15.99219,5.09942Z" transform="translate(-97.21873 -175.65252)" fill="#ffb6b6"/><path d="M230.33447,524.3584l-17.458-44.58789V415.74756a11.95065,11.95065,0,0,1,23.82081-1.38477l7.10009,60.87061L250.52,522.96582Z" transform="translate(-97.21873 -175.65252)" fill={color}/><circle cx="106.11386" cy="186.2002" r="19.63241" fill="#ffb9b9"/><path d="M204.61818,355.88489c-.91858,1.17913-2.17774,2.2436-2.38,3.72454-.14984,1.09735.32953,2.18183.37521,3.28843a4.38775,4.38775,0,0,1-4.10213,4.39293,4.86761,4.86761,0,0,0-3.13333-1.7918,2.89129,2.89129,0,0,0-2.97665,1.71964c-.583,1.647.76647,3.31993.98346,5.05349a10.45248,10.45248,0,0,1-.612,3.76625c-.49747,1.989-.6304,4.09344-1.50314,5.94869s-2.81333,3.451-4.82221,3.041c-1.68918-.34481-2.83218-1.981-3.30461-3.639s-.45121-3.41606-.79314-5.10585c-1.11092-5.4907-5.8371-9.55879-7.69135-14.845-2.376-6.77346.47834-14.52123,5.39758-19.74869a16.07587,16.07587,0,0,1,7.48865-4.84854c3.06552-.78061,6.30664-.2195,9.4523-.55331,3.364-.357,6.526-1.724,9.79535-2.59282s6.92109-1.196,9.89285.42029c2.07272,1.12731,3.57381,3.0711,5.505,4.42663a11.54819,11.54819,0,0,0,7.5865,2.03056l-3.21036,1.40331a10.31051,10.31051,0,0,0,4.3248,2.36867,7.48,7.48,0,0,1-4.60883,1.61788,5.26391,5.26391,0,0,0,3.31624,2.55c-2.43766,1.14435-5.02569,2.31676-7.70618,2.05868-1.313-.12638-2.568-.59313-3.865-.83336-2.76456-.512-5.60363.01865-8.36495.54837-1.45.27818-3.22959.5451-3.96184,1.93933C205.09063,353.38626,205.557,354.67983,204.61818,355.88489Z" transform="translate(-97.21873 -175.65252)" fill="#2f2e41"/><circle cx="236.5474" cy="205.37059" r="31.32001" fill={color}/><polygon points="255.339 205.371 238.427 205.371 238.427 188.458 234.668 188.458 234.668 205.371 217.755 205.371 217.755 209.129 234.668 209.129 234.668 226.042 238.427 226.042 238.427 209.129 255.339 209.129 255.339 205.371" fill="#fff"/><path d="M600.47428,245.66092a3.6469,3.6469,0,0,0-3.643,3.643v60.998a3.64728,3.64728,0,0,0,3.643,3.64345H846.37687a3.64729,3.64729,0,0,0,3.643-3.64345v-60.998a3.64686,3.64686,0,0,0-3.643-3.643Z" transform="translate(-97.21873 -175.65252)" fill="#fff"/><path d="M600.47428,245.66092a3.6469,3.6469,0,0,0-3.643,3.643v60.998a3.64728,3.64728,0,0,0,3.643,3.64345H846.37687a3.64729,3.64729,0,0,0,3.643-3.64345v-60.998a3.64686,3.64686,0,0,0-3.643-3.643Z" transform="translate(-97.21873 -175.65252)" fill="#e6e6e6"/><path d="M600.92954,309.84676H845.92136V249.75948H600.92954Z" transform="translate(-97.21873 -175.65252)" fill="#fff"/><path d="M628.78433,267.05261a3.18763,3.18763,0,0,0,0,6.37526H818.05811a3.18763,3.18763,0,1,0,.00274-6.37526H628.78433Z" transform="translate(-97.21873 -175.65252)" fill="#e4e4e4"/><path d="M628.78433,286.17837a3.18763,3.18763,0,0,0,0,6.37525H818.05811a3.18763,3.18763,0,0,0,.01422-6.37525h-189.288Z" transform="translate(-97.21873 -175.65252)" fill="#e4e4e4"/><path d="M429.47428,349.16092a3.6469,3.6469,0,0,0-3.643,3.643v60.998a3.64728,3.64728,0,0,0,3.643,3.64345H675.37687a3.64729,3.64729,0,0,0,3.643-3.64345v-60.998a3.64686,3.64686,0,0,0-3.643-3.643Z" transform="translate(-97.21873 -175.65252)" fill="#fff"/><path d="M429.47428,349.16092a3.6469,3.6469,0,0,0-3.643,3.643v60.998a3.64728,3.64728,0,0,0,3.643,3.64345H675.37687a3.64729,3.64729,0,0,0,3.643-3.64345v-60.998a3.64686,3.64686,0,0,0-3.643-3.643Z" transform="translate(-97.21873 -175.65252)" fill="#e6e6e6"/><path d="M429.92954,413.34676H674.92136V353.25948H429.92954Z" transform="translate(-97.21873 -175.65252)" fill="#fff"/><path d="M457.78433,370.55261a3.18763,3.18763,0,0,0,0,6.37526H647.05811a3.18763,3.18763,0,1,0,.00274-6.37526H457.78433Z" transform="translate(-97.21873 -175.65252)" fill="#e4e4e4"/><path d="M457.78433,389.67837a3.18763,3.18763,0,0,0,0,6.37525H647.05811a3.18763,3.18763,0,0,0,.01422-6.37525h-189.288Z" transform="translate(-97.21873 -175.65252)" fill="#e4e4e4"/><path d="M729.21114,512.87384a7.53637,7.53637,0,0,0,6.4045-9.619l21.79308-15.56647-12.98756-5.00094-18.70395,15.54889a7.57718,7.57718,0,0,0,3.49393,14.63752Z" transform="translate(-97.21873 -175.65252)" fill="#ffb7b7"/><path d="M741.31006,502.62159l-7.22961-12.34781.15352-.17509,29.16956-33.20861,22.648-38.623,19.66686,2.50659.29018,5.94467-.05873.0888L774.704,473.77685l-.03322.02834Z" transform="translate(-97.21873 -175.65252)" fill="#3f3d56"/><polygon points="740.467 535.914 729.346 535.913 724.054 493.014 740.469 493.015 740.467 535.914" fill="#ffb7b7"/><path d="M840.52256,722.34748l-35.86183-.00133v-.4536a13.95918,13.95918,0,0,1,13.95842-13.9582H818.62l21.90318.00089Z" transform="translate(-97.21873 -175.65252)" fill="#2f2e41"/><polygon points="644.748 535.55 633.93 532.967 638.746 490.012 654.712 493.824 644.748 535.55" fill="#ffb7b7"/><path d="M742.222,722.34748l-34.8812-8.32907.10534-.44119a13.95916,13.95916,0,0,1,16.8182-10.33524l.00086.00021,21.30423,5.08718Z" transform="translate(-97.21873 -175.65252)" fill="#2f2e41"/><path d="M785.1913,398.65418V379.93305a25.08631,25.08631,0,0,1,50.17262,0v18.72113a3.3736,3.3736,0,0,1-3.36981,3.3698h-43.433A3.3736,3.3736,0,0,1,785.1913,398.65418Z" transform="translate(-97.21873 -175.65252)" fill="#2f2e41"/><circle cx="706.86764" cy="207.69456" r="18.3924" fill="#ffb7b7"/><path d="M779.25648,381.43074a19.86684,19.86684,0,0,1,19.8444-19.84439h3.7444a19.86669,19.86669,0,0,1,19.84422,19.84439v.37443h-7.91279l-2.69884-7.5572-.53969,7.5572h-4.0894l-1.36167-3.813-.27241,3.813H779.25648Z" transform="translate(-97.21873 -175.65252)" fill="#2f2e41"/><path d="M814.81456,480.42059l-46.82973-1.78233-2.61807-30.63715c-2.019-5.60772-2.05172-10.42252-.09683-14.31026a14.32409,14.32409,0,0,1,7.90822-6.8352l10.247-12.37616a13.94748,13.94748,0,0,1,10.82969-5.04783l26.623.182c.64223-.38607,4.53454-2.36427,12.21162.96359,8.327,3.61,6.39339,16.14738,6.37277,16.27334l-.019.11778-.09148.07746-17.70976,14.91361Z" transform="translate(-97.21873 -175.65252)" fill="#3f3d56"/><polygon points="671.139 299.694 648.988 340.08 632.194 523.817 651.169 529.612 684.756 385.882 723.736 525.534 746.481 526.103 730.994 364.944 717.46 302.548 671.139 299.694" fill="#2f2e41"/><path d="M624.99453,445.41035a3.64689,3.64689,0,0,0-4.58886,2.34208L601.59575,505.7778a3.64727,3.64727,0,0,0,2.34194,4.58928L837.85662,586.196a3.64729,3.64729,0,0,0,4.589-2.3425l18.80993-58.02537a3.64687,3.64687,0,0,0-2.34208-4.58886Z" transform="translate(-97.21873 -175.65252)" fill="#fff"/><path d="M624.99453,445.41035a3.64689,3.64689,0,0,0-4.58886,2.34208L601.59575,505.7778a3.64727,3.64727,0,0,0,2.34194,4.58928L837.85662,586.196a3.64729,3.64729,0,0,0,4.589-2.3425l18.80993-58.02537a3.64687,3.64687,0,0,0-2.34208-4.58886Z" transform="translate(-97.21873 -175.65252)" fill="#e6e6e6"/><path d="M605.63465,506.60859l233.05255,75.548,18.52908-57.159-233.05254-75.548Z" transform="translate(-97.21873 -175.65252)" fill="#fff"/><path d="M645.3284,474.48951a3.18763,3.18763,0,0,0-1.96594,6.06457l180.04983,58.36627a3.18763,3.18763,0,1,0,1.96855-6.06372l-.00262-.00085Z" transform="translate(-97.21873 -175.65252)" fill={color}/><path d="M639.43059,492.68321a3.18763,3.18763,0,0,0-1.96593,6.06456L817.51449,557.114a3.18763,3.18763,0,0,0,1.97946-6.06018l-.01353-.00438Z" transform="translate(-97.21873 -175.65252)" fill={color}/><path d="M827.53864,540.728a7.53632,7.53632,0,0,0-.39673-11.54925l8.64784-25.347-13.46991,3.49968-6.14706,23.53337a7.57718,7.57718,0,0,0,11.36586,9.86316Z" transform="translate(-97.21873 -175.65252)" fill="#ffb7b7"/><path d="M831.40154,525.34659,818.33276,519.521l4.39127-44.21559-4.0866-44.58591,17.44635-9.418,3.69833,4.663.00377.1058,1.95962,56.37951-.01039.04282Z" transform="translate(-97.21873 -175.65252)" fill="#3f3d56"/><path d="M1101.255,724.34746l-683.44821,0a1.56682,1.56682,0,0,1-1.53909-1.13363,1.52912,1.52912,0,0,1,1.47725-1.91893l683.385,0a1.61535,1.61535,0,0,1,1.61617,1.19368A1.52819,1.52819,0,0,1,1101.255,724.34746Z" transform="translate(-97.21873 -175.65252)" fill="#ccc"/><path d="M327.255,724.34746l-228.44821,0a1.56682,1.56682,0,0,1-1.53909-1.13363,1.52912,1.52912,0,0,1,1.47725-1.91893l228.385,0a1.61535,1.61535,0,0,1,1.61617,1.19368A1.52819,1.52819,0,0,1,327.255,724.34746Z" transform="translate(-97.21873 -175.65252)" fill="#ccc"/>
    </>
  );

  return (
    <div className="assessment_div" style={{ display: "flex", justifyContent: "center", gap: "3rem" , padding:"2rem", flexWrap:"wrap"}}>
    <InfoCard title={"Student Section"} desc={"The Create and Manage Groups feature allows teachers to organize students into groups, simplifying the scheduling and assignment of assessments. The Add and Manage Students feature enables efficient management of student data, including personal details and exam records, ensuring streamlined tracking and administration. These features help enhance workflow efficiency, making it easier for teachers to monitor student progress and manage assessments in a more organized manner."}/>
      <Card link={"/group-student"} viewBox={"100 0 750.74209 400.87759"} width={230} height={190} card_width={"22rem"} svgContent={group_svg} title={"Create and Manage Groups"} desc={"Create a group of students to easily schedule and assign assessments to them at a later time."}/>
      <Card link={"/add-manage-students"} viewBox={"0 0 950.74209 500.87759"} svgContent={add_and_manage_student_svg} width={230} height={190} card_width={"22rem"}  title={"Add and Manage Students"} desc={"Add and manage student data, including personal details, for efficient tracking and administration."}/>
    </div>
  );
}

export default StudentCards;
