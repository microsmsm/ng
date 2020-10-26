!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{7679:function(t,n,o){"use strict";o.r(n),o.d(n,"WorkingWithFuseModule",(function(){return v}));var a,i,c,s,r,b,l,u,h,d=o("tyNb"),p=o("bTqV"),m=o("NFeN"),g=o("5HBU"),T=o("LPQX"),f=o("fXoL"),y=o("XiUz"),Y=o("mTle"),X=[{path:"server",component:(u=function t(){e(this,t)},u.\u0275fac=function(e){return new(e||u)},u.\u0275cmp=f.Mb({type:u,selectors:[["docs-working-with-fuse-server"]],decls:57,vars:0,consts:[[1,"page-layout","simple","fullwidth","docs"],["fxLayout","column","fxLayoutAlign","center start",1,"header","accent","p-24"],["fxLayout","row","fxLayoutAlign","start center"],[1,"secondary-text","s-18"],[1,"secondary-text","s-16"],[1,"secondary-text"],[1,"h2","mt-16"],[1,"content","p-24"],[1,"section-title"],["lang","bash","fxFlex","100%",1,"source-code"],["hidden","hidden"],["source",""],[1,"text-boxed"],["href","https://github.com/angular/angular-cli","target","_blank"]],template:function(e,t){1&e&&(f.Yb(0,"div",0),f.Yb(1,"div",1),f.Yb(2,"div",2),f.Yb(3,"mat-icon",3),f.Tc(4,"home"),f.Xb(),f.Yb(5,"mat-icon",4),f.Tc(6,"chevron_right"),f.Xb(),f.Yb(7,"span",5),f.Tc(8,"Documentation"),f.Xb(),f.Yb(9,"mat-icon",4),f.Tc(10,"chevron_right"),f.Xb(),f.Yb(11,"span",5),f.Tc(12,"Working with Fuse"),f.Xb(),f.Xb(),f.Yb(13,"div",6),f.Tc(14,"Server"),f.Xb(),f.Xb(),f.Yb(15,"div",7),f.Yb(16,"div",8),f.Tc(17,"Server"),f.Xb(),f.Yb(18,"p"),f.Tc(19," While still in your work folder, run the following command in the console application: "),f.Xb(),f.Yb(20,"div"),f.Yb(21,"fuse-highlight",9),f.Yb(22,"textarea",10,11),f.Tc(24,"                    ng serve\n                "),f.Xb(),f.Xb(),f.Xb(),f.Yb(25,"p"),f.Tc(26," And that's it. Angular CLI will take care everything and start the Fuse. "),f.Xb(),f.Yb(27,"p"),f.Tc(28," You can check out your console application to get further information about the server. By default, it will run on "),f.Yb(29,"b"),f.Tc(30,"http://localhost:4200"),f.Xb(),f.Tc(31," but it might change depending on your setup. "),f.Xb(),f.Yb(32,"p"),f.Tc(33," Also, there are other commands available in Fuse which may help you in your development. To see the complete list of available npm commands, check the "),f.Yb(34,"span",12),f.Tc(35,"package.json"),f.Xb(),f.Tc(36," file. "),f.Xb(),f.Yb(37,"div",8),f.Tc(38,"Reloading the Server"),f.Xb(),f.Yb(39,"p"),f.Tc(40," The "),f.Yb(41,"span",12),f.Tc(42,"ng serve"),f.Xb(),f.Tc(43," command will watch your files and reload the page for you as you make changes. But for some reason, if you need to manually restart the server, you can do it by pressing "),f.Yb(44,"b"),f.Tc(45,"Ctrl + C"),f.Xb(),f.Tc(46," on your keyboard while in the console application and then run the following command once again: "),f.Xb(),f.Yb(47,"div"),f.Yb(48,"fuse-highlight",9),f.Yb(49,"textarea",10,11),f.Tc(51,"                    ng serve\n                "),f.Xb(),f.Xb(),f.Xb(),f.Yb(52,"p"),f.Tc(53," For more information about angular-cli commands, check the "),f.Yb(54,"a",13),f.Tc(55,"angular-cli"),f.Xb(),f.Tc(56,". "),f.Xb(),f.Xb(),f.Xb())},directives:[y.e,y.d,m.a,Y.a,y.b],styles:[""]}),u)},{path:"production",component:(l=function t(){e(this,t)},l.\u0275fac=function(e){return new(e||l)},l.\u0275cmp=f.Mb({type:l,selectors:[["docs-working-with-fuse-production"]],decls:111,vars:0,consts:[[1,"page-layout","simple","fullwidth","docs"],["fxLayout","column","fxLayoutAlign","center start",1,"header","accent","p-24"],["fxLayout","row","fxLayoutAlign","start center"],[1,"secondary-text","s-18"],[1,"secondary-text","s-16"],[1,"secondary-text"],[1,"h2","mt-16"],[1,"content","p-24"],[1,"section-title"],["lang","bash","fxFlex","100%",1,"source-code"],["hidden","hidden"],["source",""],[1,"mt-24"],["href","http://karma-runner.github.io/0.13/index.html","target","_blank"],[1,"text-boxed"],["href","https://angular.github.io/protractor/","target","_blank"],[1,"mt-32"],["href","https://github.com/angular/angular-cli","target","_blank"]],template:function(e,t){1&e&&(f.Yb(0,"div",0),f.Yb(1,"div",1),f.Yb(2,"div",2),f.Yb(3,"mat-icon",3),f.Tc(4,"home"),f.Xb(),f.Yb(5,"mat-icon",4),f.Tc(6,"chevron_right"),f.Xb(),f.Yb(7,"span",5),f.Tc(8,"Documentation"),f.Xb(),f.Yb(9,"mat-icon",4),f.Tc(10,"chevron_right"),f.Xb(),f.Yb(11,"span",5),f.Tc(12,"Working with Fuse"),f.Xb(),f.Xb(),f.Yb(13,"div",6),f.Tc(14,"Production"),f.Xb(),f.Xb(),f.Yb(15,"div",7),f.Yb(16,"div",8),f.Tc(17,"Build"),f.Xb(),f.Yb(18,"p"),f.Tc(19," The following command builds the application into an output directory "),f.Xb(),f.Yb(20,"div"),f.Yb(21,"fuse-highlight",9),f.Yb(22,"textarea",10,11),f.Tc(24,"                    ng build\n                "),f.Xb(),f.Xb(),f.Xb(),f.Yb(25,"p"),f.Tc(26," The build artifacts will be stored in the "),f.Yb(27,"b"),f.Tc(28,"/dist"),f.Xb(),f.Tc(29," directory. All commands that build or serve your project, will delete the output directory. "),f.Xb(),f.Yb(30,"div",8),f.Tc(31,"Bundling & Tree-Shaking (AoT)"),f.Xb(),f.Yb(32,"p"),f.Tc(33," To build your app with AoT (Ahead of Time) compiler, use the following command: "),f.Xb(),f.Yb(34,"div"),f.Yb(35,"fuse-highlight",9),f.Yb(36,"textarea",10,11),f.Tc(38,"                    ng build --prod\n                "),f.Xb(),f.Xb(),f.Xb(),f.Yb(39,"p"),f.Tc(40," or if you want to serve with AoT, use the following: "),f.Xb(),f.Yb(41,"div"),f.Yb(42,"fuse-highlight",9),f.Yb(43,"textarea",10,11),f.Tc(45,"                    ng serve --prod\n                "),f.Xb(),f.Xb(),f.Xb(),f.Yb(46,"p"),f.Tc(47," This will make use of "),f.Yb(48,"b"),f.Tc(49,"uglifying"),f.Xb(),f.Tc(50," and "),f.Yb(51,"b"),f.Tc(52,"tree-shaking"),f.Xb(),f.Tc(53," functionality while serving the app from the memory. "),f.Xb(),f.Yb(54,"div",8),f.Tc(55,"Alternative AoT compiler"),f.Xb(),f.Yb(56,"p"),f.Tc(57," If you happen to stumble upon an error while running the "),f.Xb(),f.Yb(58,"div"),f.Yb(59,"fuse-highlight",9),f.Yb(60,"textarea",10,11),f.Tc(62,"                    ng build --prod\n                "),f.Xb(),f.Xb(),f.Xb(),f.Yb(63,"p"),f.Tc(64," command, there is an alternative one that you can use. The following command will run the "),f.Yb(65,"b"),f.Tc(66,"ng build --prod"),f.Xb(),f.Tc(67," command with an increased memory size so your app can be built: "),f.Xb(),f.Yb(68,"div"),f.Yb(69,"fuse-highlight",9),f.Yb(70,"textarea",10,11),f.Tc(72,"                    npm run build-prod\n                "),f.Xb(),f.Xb(),f.Xb(),f.Yb(73,"div",8),f.Tc(74,"Running unit tests"),f.Xb(),f.Yb(75,"div",12),f.Yb(76,"fuse-highlight",9),f.Yb(77,"textarea",10,11),f.Tc(79,"                    ng test\n                "),f.Xb(),f.Xb(),f.Xb(),f.Yb(80,"p"),f.Tc(81," Tests will execute after a build is executed via "),f.Yb(82,"a",13),f.Tc(83,"Karma"),f.Xb(),f.Tc(84,", and it will automatically watch your files for changes. "),f.Xb(),f.Yb(85,"p"),f.Tc(86," You can run tests a single time via "),f.Yb(87,"span",14),f.Tc(88,"--watch=false"),f.Xb(),f.Tc(89," or "),f.Yb(90,"span",14),f.Tc(91,"--single-run"),f.Xb(),f.Xb(),f.Yb(92,"div",8),f.Tc(93,"Running end-to-end tests"),f.Xb(),f.Yb(94,"div",12),f.Yb(95,"fuse-highlight",9),f.Yb(96,"textarea",10,11),f.Tc(98,"                    ng e2e\n                "),f.Xb(),f.Xb(),f.Xb(),f.Yb(99,"p"),f.Tc(100," Before running the tests make sure you are serving the app via "),f.Yb(101,"span",14),f.Tc(102,"ng serve."),f.Xb(),f.Tc(103," End-to-end tests are run via "),f.Yb(104,"a",15),f.Tc(105,"Protractor."),f.Xb(),f.Xb(),f.Yb(106,"p",16),f.Tc(107," For more information about angular-cli commands, check the "),f.Yb(108,"a",17),f.Tc(109,"angular-cli"),f.Xb(),f.Tc(110,". "),f.Xb(),f.Xb(),f.Xb())},directives:[y.e,y.d,m.a,Y.a,y.b],styles:[""]}),l)},{path:"directory-structure",component:(b=function t(){e(this,t)},b.\u0275fac=function(e){return new(e||b)},b.\u0275cmp=f.Mb({type:b,selectors:[["docs-working-with-fuse-directory-structure"]],decls:70,vars:0,consts:[[1,"page-layout","simple","fullwidth","docs"],["fxLayout","column","fxLayoutAlign","center start",1,"header","accent","p-24"],["fxLayout","row","fxLayoutAlign","start center"],[1,"secondary-text","s-18"],[1,"secondary-text","s-16"],[1,"secondary-text"],[1,"h2","mt-16"],[1,"content","p-24"],[1,"main-title"],[1,"message-box","warning"],[1,"section-title"]],template:function(e,t){1&e&&(f.Yb(0,"div",0),f.Yb(1,"div",1),f.Yb(2,"div",2),f.Yb(3,"mat-icon",3),f.Tc(4,"home"),f.Xb(),f.Yb(5,"mat-icon",4),f.Tc(6,"chevron_right"),f.Xb(),f.Yb(7,"span",5),f.Tc(8,"Documentation"),f.Xb(),f.Yb(9,"mat-icon",4),f.Tc(10,"chevron_right"),f.Xb(),f.Yb(11,"span",5),f.Tc(12,"Working with Fuse"),f.Xb(),f.Xb(),f.Yb(13,"div",6),f.Tc(14,"Directory Structure"),f.Xb(),f.Xb(),f.Yb(15,"div",7),f.Yb(16,"p"),f.Tc(17," Fuse has a fairly simple directory structure. All source code that you will need stays inside the "),f.Yb(18,"b"),f.Tc(19,"/src"),f.Xb(),f.Tc(20," folder. "),f.Xb(),f.Yb(21,"p"),f.Tc(22," Once you build your app, a "),f.Yb(23,"b"),f.Tc(24,"/dist"),f.Xb(),f.Tc(25," folder will appear at the root which will contain the built app. You can simply upload the contents of it to your server to start running your app. "),f.Xb(),f.Yb(26,"div",8),f.Tc(27,"Source directory (/src)"),f.Xb(),f.Yb(28,"p"),f.Tc(29," The source folder has the general Angular CLI project structure along with an additional folder called "),f.Yb(30,"b"),f.Tc(31,"/@fuse"),f.Xb(),f.Tc(32," which contains the core elements of the Fuse. "),f.Xb(),f.Yb(33,"p",9),f.Tc(34," We recommend you not to touch "),f.Yb(35,"b"),f.Tc(36,"/@fuse"),f.Xb(),f.Tc(37," directory to easily update Fuse in the future. "),f.Xb(),f.Yb(38,"div",10),f.Tc(39,"/app"),f.Xb(),f.Yb(40,"p"),f.Tc(41," This folder contains the "),f.Yb(42,"b"),f.Tc(43,"AppComponent"),f.Xb(),f.Tc(44," along with the following directories. Everything that being contained inside these folders are belong to your app and you can edit them however you like while building your app: "),f.Xb(),f.Yb(45,"ul"),f.Yb(46,"li"),f.Yb(47,"b"),f.Tc(48,"/fake-db"),f.Xb(),f.Tc(49,": The fake database data files for Fuse apps. "),f.Xb(),f.Yb(50,"li"),f.Yb(51,"b"),f.Tc(52,"/fuse-config"),f.Xb(),f.Tc(53,": The main config file for configuring the Fuse template. "),f.Xb(),f.Yb(54,"li"),f.Yb(55,"b"),f.Tc(56,"/layout"),f.Xb(),f.Tc(57,": Contains the template layout components. "),f.Xb(),f.Yb(58,"li"),f.Yb(59,"b"),f.Tc(60,"/main"),f.Xb(),f.Tc(61,": Example Fuse apps and ready to use pages and page layouts. "),f.Xb(),f.Yb(62,"li"),f.Yb(63,"b"),f.Tc(64,"/navigation"),f.Xb(),f.Tc(65,": The main navigation data. "),f.Xb(),f.Yb(66,"li"),f.Yb(67,"b"),f.Tc(68,"/store"),f.Xb(),f.Tc(69,": Ngrx-Mail app related store files. "),f.Xb(),f.Xb(),f.Xb(),f.Xb())},directives:[y.e,y.d,m.a],styles:[""]}),b)},{path:"updating-fuse",component:(r=function t(){e(this,t)},r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=f.Mb({type:r,selectors:[["docs-working-with-fuse-updating-fuse"]],decls:31,vars:0,consts:[[1,"page-layout","simple","fullwidth","docs"],["fxLayout","column","fxLayoutAlign","center start",1,"header","accent","p-24"],["fxLayout","row","fxLayoutAlign","start center"],[1,"secondary-text","s-18"],[1,"secondary-text","s-16"],[1,"secondary-text"],[1,"h2","mt-16"],[1,"content","p-24"],["href","http://www.withinpixels.com/themes/fuse-github","target","_blank"]],template:function(e,t){1&e&&(f.Yb(0,"div",0),f.Yb(1,"div",1),f.Yb(2,"div",2),f.Yb(3,"mat-icon",3),f.Tc(4,"home"),f.Xb(),f.Yb(5,"mat-icon",4),f.Tc(6,"chevron_right"),f.Xb(),f.Yb(7,"span",5),f.Tc(8,"Documentation"),f.Xb(),f.Yb(9,"mat-icon",4),f.Tc(10,"chevron_right"),f.Xb(),f.Yb(11,"span",5),f.Tc(12,"Working with Fuse"),f.Xb(),f.Xb(),f.Yb(13,"div",6),f.Tc(14,"Updating Fuse"),f.Xb(),f.Xb(),f.Yb(15,"div",7),f.Yb(16,"p"),f.Tc(17," Due to the nature of apps, we cannot give any set instructions for updating Fuse. It heavily depends on your project and it's up to you to update your code. However, there are couple points that we want to put forward which might help you to keep Fuse updated. "),f.Xb(),f.Yb(18,"ul"),f.Yb(19,"li"),f.Tc(20," The most important one is not to touch the "),f.Yb(21,"b"),f.Tc(22,"/@fuse"),f.Xb(),f.Tc(23," directory but sometimes that is going to be inevitable and in those cases, try to keep the modifications minimal. "),f.Xb(),f.Yb(24,"li"),f.Tc(25," Usually Angular and Angular Material libraries do some breaking changes and force our hands to change things. In those cases, it's always good to check their official Changelogs to see what they did. Usually they provide clear instructions and even helper tools to update your code. "),f.Xb(),f.Yb(26,"li"),f.Tc(27," Before starting your new project, "),f.Yb(28,"a",8),f.Tc(29,"join our Github repo"),f.Xb(),f.Tc(30,", fork it and build your app on top of that fork. This way, in the future, you can easily merge the changes from the main repo onto your fork. This will require merging a lot of changes manually, but it's the best way to keep the Fuse updated. "),f.Xb(),f.Xb(),f.Xb(),f.Xb())},directives:[y.e,y.d,m.a],styles:[""]}),r)},{path:"multi-language",component:(s=function t(){e(this,t)},s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=f.Mb({type:s,selectors:[["docs-working-with-fuse-multi-language"]],decls:73,vars:1,consts:[[1,"page-layout","simple","fullwidth","docs"],["fxLayout","row","fxLayoutAlign","start center",1,"header","accent","p-24","h-160"],["fxLayout","column","fxLayoutAlign","center start"],["fxLayout","row","fxLayoutAlign","start center"],[1,"secondary-text","s-18"],[1,"secondary-text","s-16"],[1,"secondary-text"],[1,"h2","mt-16"],[1,"content","p-24"],["href","https://github.com/ngx-translate/core","target","_blank",1,"link"],[1,"message-box","warning"],[1,"link",3,"routerLink"],[1,"section-title"],[1,"py-8"],["lang","typescript"],["source",""]],template:function(e,t){1&e&&(f.Yb(0,"div",0),f.Yb(1,"div",1),f.Yb(2,"div",2),f.Yb(3,"div",3),f.Yb(4,"mat-icon",4),f.Tc(5,"home"),f.Xb(),f.Yb(6,"mat-icon",5),f.Tc(7,"chevron_right"),f.Xb(),f.Yb(8,"span",6),f.Tc(9,"Components"),f.Xb(),f.Xb(),f.Yb(10,"div",7),f.Tc(11,"Multi Language"),f.Xb(),f.Xb(),f.Xb(),f.Yb(12,"div",8),f.Yb(13,"p"),f.Tc(14," Fuse uses "),f.Yb(15,"a",9),f.Tc(16,"ngx-translate"),f.Xb(),f.Tc(17," module and supports multiple languages and translations. "),f.Xb(),f.Yb(18,"p",10),f.Tc(19," Since not everybody need multi-language setup for their apps, we decided NOT to put translations everywhere. If you want to see the translations in action, visit "),f.Yb(20,"a",11),f.Tc(21," Mail"),f.Xb(),f.Tc(22," app and then change the language from the "),f.Yb(23,"b"),f.Tc(24,"Toolbar."),f.Xb(),f.Tb(25,"br"),f.Tb(26,"br"),f.Tc(27," Mail app is the only app that has translations for demonstration purposes. You can look at its source code to see the usage. "),f.Xb(),f.Yb(28,"div",12),f.Tc(29,"Usage"),f.Xb(),f.Yb(30,"p"),f.Tc(31,"In order to use the translations, create your translation file within the module you want to use the translations. For example, for the Mail app, create "),f.Yb(32,"code"),f.Tc(33,"i18n/en.ts"),f.Xb(),f.Tc(34," file inside the "),f.Yb(35,"code"),f.Tc(36,"apps/mail"),f.Xb(),f.Tc(37," folder. "),f.Xb(),f.Yb(38,"p"),f.Tc(39," The structure of the translation file is important and it must define the language id along with the translation data: "),f.Xb(),f.Yb(40,"p",13),f.Yb(41,"fuse-highlight",14),f.Yb(42,"textarea",null,15),f.Tc(44,"                    // i18n/en.ts\n                    export const locale = {\n                        lang: 'en',\n                        data: {\n                            'MAIL': {\n                             'COMPOSE': 'COMPOSE'\n                            }\n                        }\n                    };\n\n                    // i18n/tr.ts\n                    export const locale = {\n                        lang: 'tr',\n                        data: {\n                            'MAIL': {\n                             'COMPOSE': 'YEN\u0130 E-POSTA'\n                            }\n                        }\n                    };\n                "),f.Xb(),f.Xb(),f.Xb(),f.Yb(45,"p"),f.Tc(46," After you create your translation files, open the "),f.Yb(47,"code"),f.Tc(48,"*.component.ts"),f.Xb(),f.Tc(49," file for the module you want to have translations, and register your translation file. For this example, we will use the "),f.Yb(50,"code"),f.Tc(51,"mail.component.ts"),f.Xb(),f.Tc(52," file: "),f.Xb(),f.Yb(53,"fuse-highlight",14),f.Yb(54,"textarea",null,15),f.Tc(56,"                // Your imports\n                import { ... } from '..';\n\n                // Import the locale files\n                import { locale as english } from './i18n/en';\n                import { locale as turkish } from './i18n/tr';\n\n                @Component({\n                    selector : 'mail',\n                    templateUrl: './mail.component.html',\n                    styleUrls : ['./mail.component.scss']\n                })\n                export class MailComponent\n                {\n                    constructor(private translationLoader: FuseTranslationLoaderService)\n                {\n                    this.translationLoader.loadTranslations(english, turkish);\n                }\n\n                ...\n                }\n            "),f.Xb(),f.Xb(),f.Yb(57,"div",12),f.Tc(58,"Changing the language"),f.Xb(),f.Yb(59,"p"),f.Tc(60," Changing the current language can happen instantly. Simply call the "),f.Yb(61,"code"),f.Tc(62,"use"),f.Xb(),f.Tc(63," method from the translate service: "),f.Xb(),f.Yb(64,"fuse-highlight",14),f.Yb(65,"textarea",null,15),f.Tc(67,"                import { TranslateService } from '@ngx-translate/core';\n\n                constructor(private translate: TranslateService) {}\n\n                setLanguage()\n                {\n                    // Use the selected language for translations\n                    this.translate.use('tr');\n                }\n            "),f.Xb(),f.Xb(),f.Yb(68,"p"),f.Tc(69," More detailed usage of the translation service can be found in the "),f.Yb(70,"code"),f.Tc(71,"toolbar.component.ts"),f.Xb(),f.Tc(72," file. "),f.Xb(),f.Xb(),f.Xb()),2&e&&(f.Gb(20),f.rc("routerLink","/apps/mail"))},directives:[y.e,y.d,m.a,d.j,Y.a],styles:[""]}),s)},{path:"material-theming",component:(c=function t(){e(this,t)},c.\u0275fac=function(e){return new(e||c)},c.\u0275cmp=f.Mb({type:c,selectors:[["docs-working-with-fuse-material-theming"]],decls:81,vars:0,consts:[[1,"page-layout","simple","fullwidth","docs"],["fxLayout","column","fxLayoutAlign","center start",1,"header","accent","p-24"],["fxLayout","row","fxLayoutAlign","start center"],[1,"secondary-text","s-18"],[1,"secondary-text","s-16"],[1,"secondary-text"],[1,"h2","mt-16"],[1,"content","p-24"],["href","https://material.angular.io/guide/theming","target","_blank"],[1,"message-box","info"],[1,"section-title"],[1,"py-8","mb-0"],["lang","scss"],["source",""],[1,"mt-0"]],template:function(e,t){1&e&&(f.Yb(0,"div",0),f.Yb(1,"div",1),f.Yb(2,"div",2),f.Yb(3,"mat-icon",3),f.Tc(4,"home"),f.Xb(),f.Yb(5,"mat-icon",4),f.Tc(6,"chevron_right"),f.Xb(),f.Yb(7,"span",5),f.Tc(8,"Documentation"),f.Xb(),f.Yb(9,"mat-icon",4),f.Tc(10,"chevron_right"),f.Xb(),f.Yb(11,"span",5),f.Tc(12,"Working with Fuse"),f.Xb(),f.Xb(),f.Yb(13,"div",6),f.Tc(14,"Material Theming"),f.Xb(),f.Xb(),f.Yb(15,"div",7),f.Yb(16,"p"),f.Tc(17," Fuse fully takes advantage of "),f.Yb(18,"a",8),f.Tc(19,"Angular Material's theming"),f.Xb(),f.Tc(20,". "),f.Xb(),f.Yb(21,"p",9),f.Tc(22," All Material theming related codes can be found in the "),f.Yb(23,"code"),f.Tc(24,"src/app/app.theme.scss"),f.Xb(),f.Tc(25," file. This file is responsible for creating Material color themes as well as applying those themes to the individual components. "),f.Xb(),f.Yb(26,"p"),f.Tc(27," To simply explain, every component that comes with Fuse has a separate "),f.Yb(28,"code"),f.Tc(29,"*.theme.scss"),f.Xb(),f.Tc(30," file which has everything theming related. These files are separate from the component's scss files simply because they have theming mixins and they need to be imported in "),f.Yb(31,"code"),f.Tc(32,"app.theme.scss"),f.Xb(),f.Tc(33,". Having those mixins in the component's scss file would have caused duplicate content when imported. "),f.Xb(),f.Yb(34,"div",10),f.Tc(35,"Theming components"),f.Xb(),f.Yb(36,"p"),f.Tc(37," Below, you can see an example theme ("),f.Yb(38,"code"),f.Tc(39,"calendar.theme.scss"),f.Xb(),f.Tc(40,") file. When you create a component, or move one from the Demo app, you need to import this scss file in the "),f.Yb(41,"b"),f.Tc(42,"app.theme.scss"),f.Xb(),f.Tc(43," file and add it to the "),f.Yb(44,"code"),f.Tc(45,"component-theme"),f.Xb(),f.Tc(46," mixin array. "),f.Xb(),f.Yb(47,"p",11),f.Yb(48,"fuse-highlight",12),f.Yb(49,"textarea",null,13),f.Tc(51,"                    @mixin calendar-theme($theme) {\n\n                        $background: map-get($theme, background);\n                        $foreground: map-get($theme, foreground);\n                        $primary: map-get($theme, primary);\n                        $accent: map-get($theme, accent);\n                        $warn: map-get($theme, warn);\n                        $is-dark: map-get($theme, is-dark);\n\n                        // ...\n                        // The content of the mixin\n                        // ...\n\n                    }\n                "),f.Xb(),f.Xb(),f.Xb(),f.Yb(52,"p",14),f.Yb(53,"em"),f.Tc(54,"calendar.theme.scss"),f.Xb(),f.Xb(),f.Yb(55,"p",11),f.Yb(56,"fuse-highlight",12),f.Yb(57,"textarea",null,13),f.Tc(59,'                    // Import the .theme.scss file from its correct location\n                    @import "src/app/main/~/calendar.theme";\n\n                    // Define a mixin for easier access\n                    @mixin components-theme($theme) {\n\n                        // Include the imported calendar-theme mixin into the components-theme mixin\n                        @include calendar-theme($theme);\n\n                    }\n                '),f.Xb(),f.Xb(),f.Xb(),f.Yb(60,"p",14),f.Yb(61,"em"),f.Tc(62,"app.theme.scss"),f.Xb(),f.Xb(),f.Yb(63,"p"),f.Tc(64," The "),f.Yb(65,"code"),f.Tc(66,"components-theme"),f.Xb(),f.Tc(67," mixin will be called when you define a new theme so that the components can be styles according to that theme. "),f.Xb(),f.Yb(68,"p",9),f.Tc(69," Too see more examples about multiple color themes you can see the "),f.Yb(70,"code"),f.Tc(71,"src/app/app.theme.scss"),f.Xb(),f.Tc(72," file from the Demo project. "),f.Xb(),f.Yb(73,"p",9),f.Tc(74," To learn more about the contents of the "),f.Yb(75,"code"),f.Tc(76,"$theme"),f.Xb(),f.Tc(77," map, check out the Demo project. There are plenty of examples in there and you can also print out the contents of the map using the "),f.Yb(78,"code"),f.Tc(79,"@debug"),f.Xb(),f.Tc(80," function of the sass. "),f.Xb(),f.Xb(),f.Xb())},directives:[y.e,y.d,m.a,Y.a],styles:[""]}),c)},{path:"theme-layouts",component:(i=function t(){e(this,t)},i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=f.Mb({type:i,selectors:[["docs-working-with-fuse-theme-layouts"]],decls:60,vars:0,consts:[[1,"page-layout","simple","fullwidth","docs"],["fxLayout","column","fxLayoutAlign","center start",1,"header","accent","p-24"],["fxLayout","row","fxLayoutAlign","start center"],[1,"secondary-text","s-18"],[1,"secondary-text","s-16"],[1,"secondary-text"],[1,"h2","mt-16"],[1,"content","p-24"],[1,"section-title"],[1,"message-box","info"],["routerLink","/documentation/services/fuse-config"]],template:function(e,t){1&e&&(f.Yb(0,"div",0),f.Yb(1,"div",1),f.Yb(2,"div",2),f.Yb(3,"mat-icon",3),f.Tc(4,"home"),f.Xb(),f.Yb(5,"mat-icon",4),f.Tc(6,"chevron_right"),f.Xb(),f.Yb(7,"span",5),f.Tc(8,"Documentation"),f.Xb(),f.Yb(9,"mat-icon",4),f.Tc(10,"chevron_right"),f.Xb(),f.Yb(11,"span",5),f.Tc(12,"Working with Fuse"),f.Xb(),f.Xb(),f.Yb(13,"div",6),f.Tc(14,"Theme Layouts"),f.Xb(),f.Xb(),f.Yb(15,"div",7),f.Yb(16,"p"),f.Tc(17," Fuse comes with variety of different Theme Layouts which you can see and try them from the configuration sidebar (Click on the animated, spinning cog button from the right side of your screen). These layouts are accessible from "),f.Yb(18,"b"),f.Tc(19,"/src/app/layouts"),f.Xb(),f.Tc(20," directory and you can modify them however you like. "),f.Xb(),f.Yb(21,"p"),f.Tc(22," Each layout has its own options. Those options allow you to configure the layout elements such as Toolbar, Footer and Navbar. "),f.Xb(),f.Yb(23,"div",8),f.Tc(24,"Directory Structure"),f.Xb(),f.Yb(25,"p"),f.Tc(26," Inside the "),f.Yb(27,"b"),f.Tc(28,"/layouts"),f.Xb(),f.Tc(29," directory, you will find the following structure: "),f.Xb(),f.Yb(30,"ul"),f.Yb(31,"li"),f.Yb(32,"b"),f.Tc(33,"/components"),f.Xb(),f.Tc(34,": Contains the layout elements such as Toolbar, Footer and Navbar. "),f.Xb(),f.Yb(35,"li"),f.Yb(36,"b"),f.Tc(37,"/vertical"),f.Xb(),f.Tc(38,": Contains the layout styles with vertical navigation option. "),f.Xb(),f.Yb(39,"li"),f.Yb(40,"b"),f.Tc(41,"/horizontal"),f.Xb(),f.Tc(42,": Contains the layout styles with horizontal navigation option. "),f.Xb(),f.Xb(),f.Yb(43,"p",9),f.Tc(44," Each layout loads the layout elements from "),f.Yb(45,"b"),f.Tc(46,"/components"),f.Xb(),f.Tc(47," directory. That means, any modifications you will make to those elements, will be avilable acrosss the layouts. "),f.Xb(),f.Yb(48,"div",8),f.Tc(49,"Configuring the Layout"),f.Xb(),f.Yb(50,"p"),f.Tc(51," Fuse has a powerful layout system which allows you to configure and use a different layout per route. Each route can have its own layout configuration meaning that it's very easy to have pages like login page where there isn't any toolbar or navbar showing, without leaving the Fuse. "),f.Xb(),f.Yb(52,"p"),f.Tc(53," You can get more information about the "),f.Yb(54,"b"),f.Tc(55,"Fuse Config Service"),f.Xb(),f.Tc(56," and its usage from "),f.Yb(57,"a",10),f.Tc(58,"Config"),f.Xb(),f.Tc(59," documantation page. "),f.Xb(),f.Xb(),f.Xb())},directives:[y.e,y.d,m.a,d.j],styles:[""]}),i)},{path:"page-layouts",component:(a=function t(){e(this,t)},a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=f.Mb({type:a,selectors:[["docs-working-with-fuse-page-layouts"]],decls:47,vars:0,consts:[[1,"page-layout","simple","fullwidth","docs"],["fxLayout","column","fxLayoutAlign","center start",1,"header","accent","p-24"],["fxLayout","row","fxLayoutAlign","start center"],[1,"secondary-text","s-18"],[1,"secondary-text","s-16"],[1,"secondary-text"],[1,"h2","mt-16"],[1,"content","p-24"],[1,"section-title"],["lang","html",1,"source-code"],["hidden","hidden"],["source",""],[1,"message-box","info"]],template:function(e,t){1&e&&(f.Yb(0,"div",0),f.Yb(1,"div",1),f.Yb(2,"div",2),f.Yb(3,"mat-icon",3),f.Tc(4,"home"),f.Xb(),f.Yb(5,"mat-icon",4),f.Tc(6,"chevron_right"),f.Xb(),f.Yb(7,"span",5),f.Tc(8,"Documentation"),f.Xb(),f.Yb(9,"mat-icon",4),f.Tc(10,"chevron_right"),f.Xb(),f.Yb(11,"span",5),f.Tc(12,"Working with Fuse"),f.Xb(),f.Xb(),f.Yb(13,"div",6),f.Tc(14,"Page Layouts"),f.Xb(),f.Xb(),f.Yb(15,"div",7),f.Yb(16,"p"),f.Tc(17," One of the strong sides of the Fuse is its Page layouts. Every single app, pre-built page and even this documentation pages uses the Fuse's page layouts. "),f.Xb(),f.Yb(18,"p"),f.Tc(19," Simply, page layouts are pre-built layouts with a demo content which you can simply copy/paste and start building your own page or app based on it. Because page layouts, it's very easy to replicate any page style that you can find in Fuse, without needing to remove all the demo functionality from them. "),f.Xb(),f.Yb(20,"div",8),f.Tc(21,"Identifying a Page Layout"),f.Xb(),f.Yb(22,"p"),f.Tc(23," You can easily identify the layout that particular page or app using by simply looking at its main html file. The very top wrapper div will tell you everything you need to know: "),f.Xb(),f.Yb(24,"fuse-highlight",9),f.Yb(25,"textarea",10,11),f.Tc(27,'                <div class="page-layout carded left-sidebar">\n                    ...\n                </div>\n            '),f.Xb(),f.Xb(),f.Yb(28,"p"),f.Tc(29," The above example is using the "),f.Yb(30,"b"),f.Tc(31,"carded"),f.Xb(),f.Tc(32," style page with a "),f.Yb(33,"b"),f.Tc(34,"left sidebar"),f.Xb(),f.Tc(35," setup which can be found in "),f.Yb(36,"b"),f.Tc(37,"/ui/page-layouts/carded/left-sidebar-1"),f.Xb(),f.Tc(38," directory. "),f.Xb(),f.Yb(39,"p",12),f.Tc(40," The numbers in the folder names represents the scrolling style of that particular page layout. For example, "),f.Yb(41,"b"),f.Tc(42,"left-sidebar-1"),f.Xb(),f.Tc(43," has the exact same layout with "),f.Yb(44,"b"),f.Tc(45,"left-sidebar-2"),f.Xb(),f.Tc(46," but the former one uses a single scrollbar while the latter one uses separate scrollbars for its content and its sidebar. "),f.Xb(),f.Xb(),f.Xb())},directives:[y.e,y.d,m.a,Y.a],styles:[""]}),a)}],v=((h=function t(){e(this,t)}).\u0275mod=f.Qb({type:h}),h.\u0275inj=f.Pb({factory:function(e){return new(e||h)},imports:[[d.k.forChild(X),p.c,m.b,g.a,T.c]]}),h)}}])}();