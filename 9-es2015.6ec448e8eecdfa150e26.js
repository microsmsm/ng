(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{A5z7:function(t,e,i){"use strict";i.d(e,"a",(function(){return k})),i.d(e,"b",(function(){return T})),i.d(e,"c",(function(){return A})),i.d(e,"d",(function(){return O})),i.d(e,"e",(function(){return B}));var s=i("FtGj"),a=i("fXoL"),n=i("FKr1"),h=i("8LU1"),r=i("ofXK"),c=i("R1ws"),l=i("XNiG"),o=i("VRyK"),p=i("IzEk"),d=i("1G5W"),u=i("JX91"),_=i("u47x"),m=i("0EQZ"),b=i("kmnG"),g=i("nLfN"),f=i("cH1L"),C=i("3Pt+");const v=["*"],x=new a.t("MatChipRemove"),y=new a.t("MatChipAvatar"),S=new a.t("MatChipTrailingIcon");class w{constructor(t){this._elementRef=t}}const I=Object(n.B)(Object(n.w)(Object(n.x)(w),"primary"),-1);let k=(()=>{class t extends I{constructor(t,e,i,s,h,r,c,o){super(t),this._elementRef=t,this._ngZone=e,this._changeDetectorRef=r,this._hasFocus=!1,this.chipListSelectable=!0,this._chipListMultiple=!1,this._chipListDisabled=!1,this._selected=!1,this._selectable=!0,this._disabled=!1,this._removable=!0,this._onFocus=new l.a,this._onBlur=new l.a,this.selectionChange=new a.o,this.destroyed=new a.o,this.removed=new a.o,this._addHostClassName(),this._chipRippleTarget=(o||document).createElement("div"),this._chipRippleTarget.classList.add("mat-chip-ripple"),this._elementRef.nativeElement.appendChild(this._chipRippleTarget),this._chipRipple=new n.t(this,e,this._chipRippleTarget,i),this._chipRipple.setupTriggerEvents(t),this.rippleConfig=s||{},this._animationsDisabled="NoopAnimations"===h,this.tabIndex=null!=c&&parseInt(c)||-1}get rippleDisabled(){return this.disabled||this.disableRipple||!!this.rippleConfig.disabled}get selected(){return this._selected}set selected(t){const e=Object(h.c)(t);e!==this._selected&&(this._selected=e,this._dispatchSelectionChange())}get value(){return void 0!==this._value?this._value:this._elementRef.nativeElement.textContent}set value(t){this._value=t}get selectable(){return this._selectable&&this.chipListSelectable}set selectable(t){this._selectable=Object(h.c)(t)}get disabled(){return this._chipListDisabled||this._disabled}set disabled(t){this._disabled=Object(h.c)(t)}get removable(){return this._removable}set removable(t){this._removable=Object(h.c)(t)}get ariaSelected(){return this.selectable&&(this._chipListMultiple||this.selected)?this.selected.toString():null}_addHostClassName(){const t=this._elementRef.nativeElement;t.hasAttribute("mat-basic-chip")||"mat-basic-chip"===t.tagName.toLowerCase()?t.classList.add("mat-basic-chip"):t.classList.add("mat-standard-chip")}ngOnDestroy(){this.destroyed.emit({chip:this}),this._chipRipple._removeTriggerEvents()}select(){this._selected||(this._selected=!0,this._dispatchSelectionChange(),this._markForCheck())}deselect(){this._selected&&(this._selected=!1,this._dispatchSelectionChange(),this._markForCheck())}selectViaInteraction(){this._selected||(this._selected=!0,this._dispatchSelectionChange(!0),this._markForCheck())}toggleSelected(t=!1){return this._selected=!this.selected,this._dispatchSelectionChange(t),this._markForCheck(),this.selected}focus(){this._hasFocus||(this._elementRef.nativeElement.focus(),this._onFocus.next({chip:this})),this._hasFocus=!0}remove(){this.removable&&this.removed.emit({chip:this})}_handleClick(t){this.disabled?t.preventDefault():t.stopPropagation()}_handleKeydown(t){if(!this.disabled)switch(t.keyCode){case s.c:case s.b:this.remove(),t.preventDefault();break;case s.n:this.selectable&&this.toggleSelected(!0),t.preventDefault()}}_blur(){this._ngZone.onStable.asObservable().pipe(Object(p.a)(1)).subscribe(()=>{this._ngZone.run(()=>{this._hasFocus=!1,this._onBlur.next({chip:this})})})}_dispatchSelectionChange(t=!1){this.selectionChange.emit({source:this,isUserInput:t,selected:this._selected})}_markForCheck(){this._changeDetectorRef&&this._changeDetectorRef.markForCheck()}}return t.\u0275fac=function(e){return new(e||t)(a.Sb(a.l),a.Sb(a.D),a.Sb(g.a),a.Sb(n.j,8),a.Sb(c.a,8),a.Sb(a.h),a.dc("tabindex"),a.Sb(r.e,8))},t.\u0275dir=a.Nb({type:t,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(t,e,i){var s;1&t&&(a.Lb(i,y,!0),a.Lb(i,S,!0),a.Lb(i,x,!0)),2&t&&(a.Cc(s=a.hc())&&(e.avatar=s.first),a.Cc(s=a.hc())&&(e.trailingIcon=s.first),a.Cc(s=a.hc())&&(e.removeIcon=s.first))},hostAttrs:["role","option",1,"mat-chip","mat-focus-indicator"],hostVars:14,hostBindings:function(t,e){1&t&&a.gc("click",(function(t){return e._handleClick(t)}))("keydown",(function(t){return e._handleKeydown(t)}))("focus",(function(){return e.focus()}))("blur",(function(){return e._blur()})),2&t&&(a.Hb("tabindex",e.disabled?null:e.tabIndex)("disabled",e.disabled||null)("aria-disabled",e.disabled.toString())("aria-selected",e.ariaSelected),a.Kb("mat-chip-selected",e.selected)("mat-chip-with-avatar",e.avatar)("mat-chip-with-trailing-icon",e.trailingIcon||e.removeIcon)("mat-chip-disabled",e.disabled)("_mat-animation-noopable",e._animationsDisabled))},inputs:{color:"color",disableRipple:"disableRipple",tabIndex:"tabIndex",selected:"selected",value:"value",selectable:"selectable",disabled:"disabled",removable:"removable"},outputs:{selectionChange:"selectionChange",destroyed:"destroyed",removed:"removed"},exportAs:["matChip"],features:[a.Db]}),t})(),O=(()=>{class t{constructor(t,e){this._parentChip=t,e&&"BUTTON"===e.nativeElement.nodeName&&e.nativeElement.setAttribute("type","button")}_handleClick(t){const e=this._parentChip;e.removable&&!e.disabled&&e.remove(),t.stopPropagation()}}return t.\u0275fac=function(e){return new(e||t)(a.Sb(k),a.Sb(a.l))},t.\u0275dir=a.Nb({type:t,selectors:[["","matChipRemove",""]],hostAttrs:[1,"mat-chip-remove","mat-chip-trailing-icon"],hostBindings:function(t,e){1&t&&a.gc("click",(function(t){return e._handleClick(t)}))},features:[a.Fb([{provide:x,useExisting:t}])]}),t})();const F=new a.t("mat-chips-default-options");class L{constructor(t,e,i,s){this._defaultErrorStateMatcher=t,this._parentForm=e,this._parentFormGroup=i,this.ngControl=s}}const E=Object(n.z)(L);let R=0;class D{constructor(t,e){this.source=t,this.value=e}}let A=(()=>{class t extends E{constructor(t,e,i,s,n,h,r){super(h,s,n,r),this._elementRef=t,this._changeDetectorRef=e,this._dir=i,this.ngControl=r,this.controlType="mat-chip-list",this._lastDestroyedChipIndex=null,this._destroyed=new l.a,this._uid="mat-chip-list-"+R++,this._tabIndex=0,this._userTabIndex=null,this._onTouched=()=>{},this._onChange=()=>{},this._multiple=!1,this._compareWith=(t,e)=>t===e,this._required=!1,this._disabled=!1,this.ariaOrientation="horizontal",this._selectable=!0,this.change=new a.o,this.valueChange=new a.o,this.ngControl&&(this.ngControl.valueAccessor=this)}get selected(){return this.multiple?this._selectionModel.selected:this._selectionModel.selected[0]}get role(){return this.empty?null:"listbox"}get multiple(){return this._multiple}set multiple(t){this._multiple=Object(h.c)(t),this._syncChipsState()}get compareWith(){return this._compareWith}set compareWith(t){this._compareWith=t,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(t){this.writeValue(t),this._value=t}get id(){return this._chipInput?this._chipInput.id:this._uid}get required(){return this._required}set required(t){this._required=Object(h.c)(t),this.stateChanges.next()}get placeholder(){return this._chipInput?this._chipInput.placeholder:this._placeholder}set placeholder(t){this._placeholder=t,this.stateChanges.next()}get focused(){return this._chipInput&&this._chipInput.focused||this._hasFocusedChip()}get empty(){return(!this._chipInput||this._chipInput.empty)&&(!this.chips||0===this.chips.length)}get shouldLabelFloat(){return!this.empty||this.focused}get disabled(){return this.ngControl?!!this.ngControl.disabled:this._disabled}set disabled(t){this._disabled=Object(h.c)(t),this._syncChipsState()}get selectable(){return this._selectable}set selectable(t){this._selectable=Object(h.c)(t),this.chips&&this.chips.forEach(t=>t.chipListSelectable=this._selectable)}set tabIndex(t){this._userTabIndex=t,this._tabIndex=t}get chipSelectionChanges(){return Object(o.a)(...this.chips.map(t=>t.selectionChange))}get chipFocusChanges(){return Object(o.a)(...this.chips.map(t=>t._onFocus))}get chipBlurChanges(){return Object(o.a)(...this.chips.map(t=>t._onBlur))}get chipRemoveChanges(){return Object(o.a)(...this.chips.map(t=>t.destroyed))}ngAfterContentInit(){this._keyManager=new _.g(this.chips).withWrap().withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr"),this._dir&&this._dir.change.pipe(Object(d.a)(this._destroyed)).subscribe(t=>this._keyManager.withHorizontalOrientation(t)),this._keyManager.tabOut.pipe(Object(d.a)(this._destroyed)).subscribe(()=>{this._allowFocusEscape()}),this.chips.changes.pipe(Object(u.a)(null),Object(d.a)(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>{this._syncChipsState()}),this._resetChips(),this._initializeSelection(),this._updateTabIndex(),this._updateFocusForDestroyedChips(),this.stateChanges.next()})}ngOnInit(){this._selectionModel=new m.c(this.multiple,void 0,!1),this.stateChanges.next()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==this._disabled&&(this.disabled=!!this.ngControl.disabled))}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),this.stateChanges.complete(),this._dropSubscriptions()}registerInput(t){this._chipInput=t}setDescribedByIds(t){this._ariaDescribedby=t.join(" ")}writeValue(t){this.chips&&this._setSelectionByValue(t,!1)}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t,this.stateChanges.next()}onContainerClick(t){this._originatesFromChip(t)||this.focus()}focus(t){this.disabled||this._chipInput&&this._chipInput.focused||(this.chips.length>0?(this._keyManager.setFirstItemActive(),this.stateChanges.next()):(this._focusInput(t),this.stateChanges.next()))}_focusInput(t){this._chipInput&&this._chipInput.focus(t)}_keydown(t){const e=t.target;t.keyCode===s.b&&this._isInputEmpty(e)?(this._keyManager.setLastItemActive(),t.preventDefault()):e&&e.classList.contains("mat-chip")&&(t.keyCode===s.h?(this._keyManager.setFirstItemActive(),t.preventDefault()):t.keyCode===s.e?(this._keyManager.setLastItemActive(),t.preventDefault()):this._keyManager.onKeydown(t),this.stateChanges.next())}_updateTabIndex(){this._tabIndex=this._userTabIndex||(0===this.chips.length?-1:0)}_updateFocusForDestroyedChips(){if(null!=this._lastDestroyedChipIndex)if(this.chips.length){const t=Math.min(this._lastDestroyedChipIndex,this.chips.length-1);this._keyManager.setActiveItem(t)}else this.focus();this._lastDestroyedChipIndex=null}_isValidIndex(t){return t>=0&&t<this.chips.length}_isInputEmpty(t){return!(!t||"input"!==t.nodeName.toLowerCase()||t.value)}_setSelectionByValue(t,e=!0){if(this._clearSelection(),this.chips.forEach(t=>t.deselect()),Array.isArray(t))t.forEach(t=>this._selectValue(t,e)),this._sortValues();else{const i=this._selectValue(t,e);i&&e&&this._keyManager.setActiveItem(i)}}_selectValue(t,e=!0){const i=this.chips.find(e=>null!=e.value&&this._compareWith(e.value,t));return i&&(e?i.selectViaInteraction():i.select(),this._selectionModel.select(i)),i}_initializeSelection(){Promise.resolve().then(()=>{(this.ngControl||this._value)&&(this._setSelectionByValue(this.ngControl?this.ngControl.value:this._value,!1),this.stateChanges.next())})}_clearSelection(t){this._selectionModel.clear(),this.chips.forEach(e=>{e!==t&&e.deselect()}),this.stateChanges.next()}_sortValues(){this._multiple&&(this._selectionModel.clear(),this.chips.forEach(t=>{t.selected&&this._selectionModel.select(t)}),this.stateChanges.next())}_propagateChanges(t){let e=null;e=Array.isArray(this.selected)?this.selected.map(t=>t.value):this.selected?this.selected.value:t,this._value=e,this.change.emit(new D(this,e)),this.valueChange.emit(e),this._onChange(e),this._changeDetectorRef.markForCheck()}_blur(){this._hasFocusedChip()||this._keyManager.setActiveItem(-1),this.disabled||(this._chipInput?setTimeout(()=>{this.focused||this._markAsTouched()}):this._markAsTouched())}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next()}_allowFocusEscape(){-1!==this._tabIndex&&(this._tabIndex=-1,setTimeout(()=>{this._tabIndex=this._userTabIndex||0,this._changeDetectorRef.markForCheck()}))}_resetChips(){this._dropSubscriptions(),this._listenToChipsFocus(),this._listenToChipsSelection(),this._listenToChipsRemoved()}_dropSubscriptions(){this._chipFocusSubscription&&(this._chipFocusSubscription.unsubscribe(),this._chipFocusSubscription=null),this._chipBlurSubscription&&(this._chipBlurSubscription.unsubscribe(),this._chipBlurSubscription=null),this._chipSelectionSubscription&&(this._chipSelectionSubscription.unsubscribe(),this._chipSelectionSubscription=null),this._chipRemoveSubscription&&(this._chipRemoveSubscription.unsubscribe(),this._chipRemoveSubscription=null)}_listenToChipsSelection(){this._chipSelectionSubscription=this.chipSelectionChanges.subscribe(t=>{t.source.selected?this._selectionModel.select(t.source):this._selectionModel.deselect(t.source),this.multiple||this.chips.forEach(t=>{!this._selectionModel.isSelected(t)&&t.selected&&t.deselect()}),t.isUserInput&&this._propagateChanges()})}_listenToChipsFocus(){this._chipFocusSubscription=this.chipFocusChanges.subscribe(t=>{let e=this.chips.toArray().indexOf(t.chip);this._isValidIndex(e)&&this._keyManager.updateActiveItem(e),this.stateChanges.next()}),this._chipBlurSubscription=this.chipBlurChanges.subscribe(()=>{this._blur(),this.stateChanges.next()})}_listenToChipsRemoved(){this._chipRemoveSubscription=this.chipRemoveChanges.subscribe(t=>{const e=t.chip,i=this.chips.toArray().indexOf(t.chip);this._isValidIndex(i)&&e._hasFocus&&(this._lastDestroyedChipIndex=i)})}_originatesFromChip(t){let e=t.target;for(;e&&e!==this._elementRef.nativeElement;){if(e.classList.contains("mat-chip"))return!0;e=e.parentElement}return!1}_hasFocusedChip(){return this.chips&&this.chips.some(t=>t._hasFocus)}_syncChipsState(){this.chips&&this.chips.forEach(t=>{t._chipListDisabled=this._disabled,t._chipListMultiple=this.multiple})}}return t.\u0275fac=function(e){return new(e||t)(a.Sb(a.l),a.Sb(a.h),a.Sb(f.c,8),a.Sb(C.r,8),a.Sb(C.i,8),a.Sb(n.d),a.Sb(C.o,10))},t.\u0275cmp=a.Mb({type:t,selectors:[["mat-chip-list"]],contentQueries:function(t,e,i){var s;1&t&&a.Lb(i,k,!0),2&t&&a.Cc(s=a.hc())&&(e.chips=s)},hostAttrs:[1,"mat-chip-list"],hostVars:15,hostBindings:function(t,e){1&t&&a.gc("focus",(function(){return e.focus()}))("blur",(function(){return e._blur()}))("keydown",(function(t){return e._keydown(t)})),2&t&&(a.bc("id",e._uid),a.Hb("tabindex",e.disabled?null:e._tabIndex)("aria-describedby",e._ariaDescribedby||null)("aria-required",e.role?e.required:null)("aria-disabled",e.disabled.toString())("aria-invalid",e.errorState)("aria-multiselectable",e.multiple)("role",e.role)("aria-orientation",e.ariaOrientation),a.Kb("mat-chip-list-disabled",e.disabled)("mat-chip-list-invalid",e.errorState)("mat-chip-list-required",e.required))},inputs:{ariaOrientation:["aria-orientation","ariaOrientation"],multiple:"multiple",compareWith:"compareWith",value:"value",required:"required",placeholder:"placeholder",disabled:"disabled",selectable:"selectable",tabIndex:"tabIndex",errorStateMatcher:"errorStateMatcher"},outputs:{change:"change",valueChange:"valueChange"},exportAs:["matChipList"],features:[a.Fb([{provide:b.d,useExisting:t}]),a.Db],ngContentSelectors:v,decls:2,vars:0,consts:[[1,"mat-chip-list-wrapper"]],template:function(t,e){1&t&&(a.qc(),a.Yb(0,"div",0),a.pc(1),a.Xb())},styles:['.mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0);border:none;-webkit-appearance:none;-moz-appearance:none}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:"";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip:focus{outline:dotted 2px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}\n'],encapsulation:2,changeDetection:0}),t})(),M=0,T=(()=>{class t{constructor(t,e){this._elementRef=t,this._defaultOptions=e,this.focused=!1,this._addOnBlur=!1,this.separatorKeyCodes=this._defaultOptions.separatorKeyCodes,this.chipEnd=new a.o,this.placeholder="",this.id="mat-chip-list-input-"+M++,this._disabled=!1,this._inputElement=this._elementRef.nativeElement}set chipList(t){t&&(this._chipList=t,this._chipList.registerInput(this))}get addOnBlur(){return this._addOnBlur}set addOnBlur(t){this._addOnBlur=Object(h.c)(t)}get disabled(){return this._disabled||this._chipList&&this._chipList.disabled}set disabled(t){this._disabled=Object(h.c)(t)}get empty(){return!this._inputElement.value}ngOnChanges(){this._chipList.stateChanges.next()}_keydown(t){t&&t.keyCode===s.o&&!Object(s.s)(t,"shiftKey")&&this._chipList._allowFocusEscape(),this._emitChipEnd(t)}_blur(){this.addOnBlur&&this._emitChipEnd(),this.focused=!1,this._chipList.focused||this._chipList._blur(),this._chipList.stateChanges.next()}_focus(){this.focused=!0,this._chipList.stateChanges.next()}_emitChipEnd(t){!this._inputElement.value&&t&&this._chipList._keydown(t),t&&!this._isSeparatorKey(t)||(this.chipEnd.emit({input:this._inputElement,value:this._inputElement.value}),t&&t.preventDefault())}_onInput(){this._chipList.stateChanges.next()}focus(t){this._inputElement.focus(t)}_isSeparatorKey(t){if(Object(s.s)(t))return!1;const e=this.separatorKeyCodes,i=t.keyCode;return Array.isArray(e)?e.indexOf(i)>-1:e.has(i)}}return t.\u0275fac=function(e){return new(e||t)(a.Sb(a.l),a.Sb(F))},t.\u0275dir=a.Nb({type:t,selectors:[["input","matChipInputFor",""]],hostAttrs:[1,"mat-chip-input","mat-input-element"],hostVars:5,hostBindings:function(t,e){1&t&&a.gc("keydown",(function(t){return e._keydown(t)}))("blur",(function(){return e._blur()}))("focus",(function(){return e._focus()}))("input",(function(){return e._onInput()})),2&t&&(a.bc("id",e.id),a.Hb("disabled",e.disabled||null)("placeholder",e.placeholder||null)("aria-invalid",e._chipList&&e._chipList.ngControl?e._chipList.ngControl.invalid:null)("aria-required",e._chipList&&e._chipList.required||null))},inputs:{separatorKeyCodes:["matChipInputSeparatorKeyCodes","separatorKeyCodes"],placeholder:"placeholder",id:"id",chipList:["matChipInputFor","chipList"],addOnBlur:["matChipInputAddOnBlur","addOnBlur"],disabled:"disabled"},outputs:{chipEnd:"matChipInputTokenEnd"},exportAs:["matChipInput","matChipInputFor"],features:[a.Eb]}),t})();const j={separatorKeyCodes:[s.f]};let B=(()=>{class t{}return t.\u0275mod=a.Qb({type:t}),t.\u0275inj=a.Pb({factory:function(e){return new(e||t)},providers:[n.d,{provide:F,useValue:j}]}),t})()}}]);