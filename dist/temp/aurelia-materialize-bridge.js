'use strict';

exports.__esModule = true;
exports.MdWaves = exports.MdStaggeredList = exports.MdFadeinImage = exports.MdTooltip = exports.MdToastService = exports.MdTabs = exports.MdSwitch = exports.MdSlider = exports.MdSidenav = exports.MdSidenavCollapse = exports.MdSelect = exports.MdScrollSpy = exports.MdScrollfire = exports.MdScrollfireTarget = exports.ScrollfirePatch = exports.MdRange = exports.MdRadio = exports.MdPushpin = exports.MdProgress = exports.MdParallax = exports.MdPagination = exports.MdNavbar = exports.MdModalTrigger = exports.MdInput = exports.MdInputUpdateService = exports.MdPrefix = exports.MdFooter = exports.MdFileInput = exports.MdFab = exports.MdDropdown = exports.MdDropdownElement = exports.MdDatePicker = exports.constants = exports.AttributeManager = exports.LightenValueConverter = exports.DarkenValueConverter = exports.MdlListSelector = exports.MdCollection = exports.MdCollectionItem = exports.MdCollectionHeader = exports.MdCollapsible = exports.MdChip = exports.MdCharCounter = exports.MdCheckbox = exports.MdCarousel = exports.MdCarouselItem = exports.MdCard = exports.MdButton = exports.InstructionFilterValueConverter = exports.MdBreadcrumbs = exports.MdBox = exports.MdBadge = exports.version = exports.ConfigBuilder = exports.ClickCounter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _class3, _desc, _value, _class4, _descriptor, _dec4, _dec5, _dec6, _class6, _desc2, _value2, _class7, _descriptor2, _dec7, _dec8, _class9, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class10, _desc3, _value3, _class11, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class13, _desc4, _value4, _class14, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _dec21, _dec22, _dec23, _class16, _desc5, _value5, _class17, _descriptor11, _descriptor12, _dec24, _dec25, _dec26, _class19, _desc6, _value6, _class20, _descriptor13, _dec27, _dec28, _dec29, _dec30, _dec31, _class22, _desc7, _value7, _class23, _descriptor14, _descriptor15, _descriptor16, _class24, _temp, _dec32, _dec33, _dec34, _class25, _desc8, _value8, _class26, _descriptor17, _dec35, _dec36, _dec37, _class28, _desc9, _value9, _class29, _descriptor18, _dec38, _dec39, _dec40, _dec41, _class31, _dec42, _dec43, _class32, _dec44, _class33, _dec45, _dec46, _class34, _dec47, _dec48, _dec49, _dec50, _class35, _desc10, _value10, _class36, _descriptor19, _descriptor20, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _dec58, _class39, _desc11, _value11, _class40, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _dec59, _dec60, _dec61, _dec62, _dec63, _dec64, _dec65, _dec66, _dec67, _dec68, _class42, _desc12, _value12, _class43, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _class44, _temp2, _dec69, _dec70, _dec71, _dec72, _dec73, _dec74, _dec75, _dec76, _dec77, _dec78, _dec79, _class45, _desc13, _value13, _class46, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _dec80, _dec81, _dec82, _dec83, _class48, _desc14, _value14, _class49, _descriptor44, _descriptor45, _dec84, _dec85, _dec86, _dec87, _dec88, _class51, _desc15, _value15, _class52, _descriptor46, _descriptor47, _descriptor48, _dec89, _dec90, _class54, _dec91, _dec92, _class55, _dec93, _class56, _dec94, _dec95, _dec96, _dec97, _dec98, _dec99, _dec100, _dec101, _dec102, _dec103, _class58, _desc16, _value16, _class59, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _descriptor53, _descriptor54, _descriptor55, _descriptor56, _class60, _temp3, _dec104, _dec105, _dec106, _class61, _desc17, _value17, _class62, _descriptor57, _dec107, _dec108, _dec109, _class64, _desc18, _value18, _class65, _descriptor58, _dec110, _dec111, _dec112, _dec113, _dec114, _dec115, _dec116, _dec117, _dec118, _class67, _desc19, _value19, _class68, _descriptor59, _descriptor60, _descriptor61, _descriptor62, _descriptor63, _descriptor64, _descriptor65, _dec119, _dec120, _class70, _dec121, _dec122, _dec123, _dec124, _dec125, _class71, _desc20, _value20, _class72, _descriptor66, _descriptor67, _descriptor68, _dec126, _dec127, _dec128, _dec129, _dec130, _class74, _desc21, _value21, _class75, _descriptor69, _descriptor70, _descriptor71, _dec131, _dec132, _dec133, _dec134, _dec135, _dec136, _dec137, _dec138, _class77, _desc22, _value22, _class78, _descriptor72, _descriptor73, _descriptor74, _descriptor75, _descriptor76, _descriptor77, _class79, _temp4, _dec139, _dec140, _dec141, _dec142, _dec143, _dec144, _class80, _desc23, _value23, _class81, _descriptor78, _descriptor79, _descriptor80, _descriptor81, _class83, _temp5, _dec145, _dec146, _dec147, _dec148, _class84, _desc24, _value24, _class85, _descriptor82, _descriptor83, _dec149, _dec150, _class87, _dec151, _dec152, _dec153, _class89, _desc25, _value25, _class90, _descriptor84, _dec154, _dec155, _dec156, _class92, _desc26, _value26, _class93, _descriptor85, _dec157, _dec158, _dec159, _class95, _desc27, _value27, _class96, _descriptor86, _dec160, _dec161, _dec162, _dec163, _dec164, _dec165, _class98, _desc28, _value28, _class99, _descriptor87, _descriptor88, _descriptor89, _descriptor90, _class100, _temp6, _dec166, _dec167, _dec168, _dec169, _dec170, _dec171, _dec172, _dec173, _class101, _desc29, _value29, _class102, _descriptor91, _descriptor92, _descriptor93, _descriptor94, _descriptor95, _dec174, _dec175, _dec176, _dec177, _dec178, _dec179, _class104, _desc30, _value30, _class105, _descriptor96, _descriptor97, _descriptor98, _descriptor99, _dec180, _dec181, _class107, _dec182, _dec183, _dec184, _dec185, _class108, _desc31, _value31, _class109, _descriptor100, _descriptor101, _descriptor102, _dec186, _dec187, _dec188, _class111, _desc32, _value32, _class112, _descriptor103, _dec189, _dec190, _dec191, _class114, _desc33, _value33, _class115, _descriptor104, _dec192, _dec193, _dec194, _dec195, _dec196, _class117, _desc34, _value34, _class118, _descriptor105, _descriptor106, _descriptor107;

exports.configure = configure;
exports.getBooleanFromAttributeValue = getBooleanFromAttributeValue;
exports.fireEvent = fireEvent;
exports.fireMaterializeEvent = fireMaterializeEvent;

var _aureliaLogging = require('aurelia-logging');

var LogManager = _interopRequireWildcard(_aureliaLogging);

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaBinding = require('aurelia-binding');

var _aureliaRouter = require('aurelia-router');

var _aureliaTaskQueue = require('aurelia-task-queue');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClickCounter = exports.ClickCounter = function () {
  function ClickCounter() {
    _classCallCheck(this, ClickCounter);

    this.count = 0;
  }

  ClickCounter.prototype.increment = function increment() {
    this.count++;
  };

  return ClickCounter;
}();

var ConfigBuilder = exports.ConfigBuilder = function () {
  function ConfigBuilder() {
    _classCallCheck(this, ConfigBuilder);

    this.useGlobalResources = true;
    this.useScrollfirePatch = false;
    this.globalResources = [];
  }

  ConfigBuilder.prototype.useAll = function useAll() {
    return this.useBadge().useBox().useBreadcrumbs().useButton().useCard().useCarousel().useCharacterCounter().useCheckbox().useChip().useCollapsible().useCollection().useColors().useDatePicker().useDropdown().useFab().useFile().useFooter().useInput().useModal().useNavbar().usePagination().useParallax().useProgress().usePushpin().useRadio().useRange().useScrollfire().useSelect().useSidenav().useSlider().useSwitch().useTabs().useTooltip().useTransitions().useWaves().useWell();
  };

  ConfigBuilder.prototype.useBadge = function useBadge() {
    this.globalResources.push('./badge/badge');
    return this;
  };

  ConfigBuilder.prototype.useBox = function useBox() {
    this.globalResources.push('./box/box');
    return this;
  };

  ConfigBuilder.prototype.useBreadcrumbs = function useBreadcrumbs() {
    this.globalResources.push('./breadcrumbs/breadcrumbs');
    return this;
  };

  ConfigBuilder.prototype.useButton = function useButton() {
    this.globalResources.push('./button/button');
    return this;
  };

  ConfigBuilder.prototype.useCarousel = function useCarousel() {
    this.globalResources.push('./carousel/carousel');
    this.globalResources.push('./carousel/carousel-item');
    return this;
  };

  ConfigBuilder.prototype.useCharacterCounter = function useCharacterCounter() {
    this.globalResources.push('./char-counter/char-counter');
    return this;
  };

  ConfigBuilder.prototype.useCard = function useCard() {
    this.globalResources.push('./card/card');
    return this;
  };

  ConfigBuilder.prototype.useCheckbox = function useCheckbox() {
    this.globalResources.push('./checkbox/checkbox');
    return this;
  };

  ConfigBuilder.prototype.useChip = function useChip() {
    this.globalResources.push('./chip/chip');
    return this;
  };

  ConfigBuilder.prototype.useClickCounter = function useClickCounter() {
    this.globalResources.push('./click-counter');
    return this;
  };

  ConfigBuilder.prototype.useCollapsible = function useCollapsible() {
    this.globalResources.push('./collapsible/collapsible');
    return this;
  };

  ConfigBuilder.prototype.useCollection = function useCollection() {
    this.globalResources.push('./collection/collection');
    this.globalResources.push('./collection/collection-item');
    this.globalResources.push('./collection/collection-header');
    this.globalResources.push('./collection/md-collection-selector');
    return this;
  };

  ConfigBuilder.prototype.useColors = function useColors() {
    this.globalResources.push('./colors/md-colors.html');
    return this;
  };

  ConfigBuilder.prototype.useDatePicker = function useDatePicker() {
    this.globalResources.push('./datepicker/datepicker');
    return this;
  };

  ConfigBuilder.prototype.useDropdown = function useDropdown() {
    this.globalResources.push('./dropdown/dropdown');
    return this;
  };

  ConfigBuilder.prototype.useFab = function useFab() {
    this.globalResources.push('./fab/fab');
    return this;
  };

  ConfigBuilder.prototype.useFile = function useFile() {
    this.globalResources.push('./file/file');
    return this;
  };

  ConfigBuilder.prototype.useFooter = function useFooter() {
    this.globalResources.push('./footer/footer');
    return this;
  };

  ConfigBuilder.prototype.useInput = function useInput() {
    this.globalResources.push('./input/input');
    this.globalResources.push('./input/input-prefix');
    return this;
  };

  ConfigBuilder.prototype.useModal = function useModal() {
    this.globalResources.push('./modal/modal-trigger');
    return this;
  };

  ConfigBuilder.prototype.useNavbar = function useNavbar() {
    this.globalResources.push('./navbar/navbar');
    return this;
  };

  ConfigBuilder.prototype.usePagination = function usePagination() {
    this.globalResources.push('./pagination/pagination');
    return this;
  };

  ConfigBuilder.prototype.useParallax = function useParallax() {
    this.globalResources.push('./parallax/parallax');
    return this;
  };

  ConfigBuilder.prototype.useProgress = function useProgress() {
    this.globalResources.push('./progress/progress');
    return this;
  };

  ConfigBuilder.prototype.usePushpin = function usePushpin() {
    this.globalResources.push('./pushpin/pushpin');
    return this;
  };

  ConfigBuilder.prototype.useRadio = function useRadio() {
    this.globalResources.push('./radio/radio');
    return this;
  };

  ConfigBuilder.prototype.useRange = function useRange() {
    this.globalResources.push('./range/range');
    return this;
  };

  ConfigBuilder.prototype.useScrollfire = function useScrollfire() {
    this.globalResources.push('./scrollfire/scrollfire');
    this.globalResources.push('./scrollfire/scrollfire-target');
    return this;
  };

  ConfigBuilder.prototype.useScrollSpy = function useScrollSpy() {
    this.globalResources.push('./scrollspy/scrollspy');
    return this;
  };

  ConfigBuilder.prototype.useSelect = function useSelect() {
    this.globalResources.push('./select/select');
    return this;
  };

  ConfigBuilder.prototype.useSidenav = function useSidenav() {
    this.globalResources.push('./sidenav/sidenav');
    this.globalResources.push('./sidenav/sidenav-collapse');
    return this;
  };

  ConfigBuilder.prototype.useSlider = function useSlider() {
    this.globalResources.push('./slider/slider');

    return this;
  };

  ConfigBuilder.prototype.useSwitch = function useSwitch() {
    this.globalResources.push('./switch/switch');
    return this;
  };

  ConfigBuilder.prototype.useTabs = function useTabs() {
    this.globalResources.push('./tabs/tabs');
    return this;
  };

  ConfigBuilder.prototype.useTooltip = function useTooltip() {
    this.globalResources.push('./tooltip/tooltip');
    return this;
  };

  ConfigBuilder.prototype.useTransitions = function useTransitions() {
    this.globalResources.push('./transitions/fadein-image');
    this.globalResources.push('./transitions/staggered-list');
    return this;
  };

  ConfigBuilder.prototype.useWaves = function useWaves() {
    this.globalResources.push('./waves/waves');
    return this;
  };

  ConfigBuilder.prototype.useWell = function useWell() {
    this.globalResources.push('./well/md-well.html');
    return this;
  };

  ConfigBuilder.prototype.withoutGlobalResources = function withoutGlobalResources() {
    this.useGlobalResources = false;
    return this;
  };

  ConfigBuilder.prototype.withScrollfirePatch = function withScrollfirePatch() {
    this.useScrollfirePatch = true;
    return this;
  };

  return ConfigBuilder;
}();

function configure(aurelia, configCallback) {
  var builder = new ConfigBuilder();

  if (configCallback !== undefined && typeof configCallback === 'function') {
    configCallback(builder);
  }

  if (builder.useGlobalResources) {
    aurelia.globalResources(builder.globalResources);
  }
  if (builder.useScrollfirePatch) {
    new ScrollfirePatch().patch();
  }
}

var version = exports.version = '0.5.1';

var MdBadge = exports.MdBadge = (_dec = (0, _aureliaTemplating.customAttribute)('md-badge'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec(_class3 = _dec2(_class3 = (_class4 = function () {
  function MdBadge(element) {
    _classCallCheck(this, MdBadge);

    _initDefineProp(this, 'isNew', _descriptor, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdBadge.prototype.attached = function attached() {
    var classes = ['badge'];
    if (getBooleanFromAttributeValue(this.isNew)) {
      classes.push('new');
    }
    this.attributeManager.addClasses(classes);
  };

  MdBadge.prototype.detached = function detached() {
    this.attributeManager.removeClasses(['badge', 'new']);
  };

  return MdBadge;
}(), (_descriptor = _applyDecoratedDescriptor(_class4.prototype, 'isNew', [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class4)) || _class3) || _class3);
var MdBox = exports.MdBox = (_dec4 = (0, _aureliaTemplating.customAttribute)('md-box'), _dec5 = (0, _aureliaDependencyInjection.inject)(Element), _dec6 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec4(_class6 = _dec5(_class6 = (_class7 = function () {
  function MdBox(element) {
    _classCallCheck(this, MdBox);

    _initDefineProp(this, 'caption', _descriptor2, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdBox.prototype.attached = function attached() {
    this.attributeManager.addClasses('materialboxed');
    if (this.caption) {
      this.attributeManager.addAttributes({ 'data-caption': this.caption });
    }

    $(this.element).materialbox();
  };

  MdBox.prototype.detached = function detached() {
    this.attributeManager.removeAttributes('data-caption');
    this.attributeManager.removeClasses('materialboxed');
  };

  return MdBox;
}(), (_descriptor2 = _applyDecoratedDescriptor(_class7.prototype, 'caption', [_dec6], {
  enumerable: true,
  initializer: null
})), _class7)) || _class6) || _class6);
var MdBreadcrumbs = exports.MdBreadcrumbs = (_dec7 = (0, _aureliaTemplating.customElement)('md-breadcrumbs'), _dec8 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaRouter.Router), _dec7(_class9 = _dec8(_class9 = function () {
  function MdBreadcrumbs(element, router) {
    _classCallCheck(this, MdBreadcrumbs);

    this.element = element;
    this._childRouter = router;
    while (router.parent) {
      router = router.parent;
    }
    this.router = router;
  }

  MdBreadcrumbs.prototype.navigate = function navigate(navigationInstruction) {
    this._childRouter.navigateToRoute(navigationInstruction.config.name);
  };

  return MdBreadcrumbs;
}()) || _class9) || _class9);

var InstructionFilterValueConverter = exports.InstructionFilterValueConverter = function () {
  function InstructionFilterValueConverter() {
    _classCallCheck(this, InstructionFilterValueConverter);
  }

  InstructionFilterValueConverter.prototype.toView = function toView(navigationInstructions) {
    return navigationInstructions.filter(function (i) {
      var result = false;
      if (i.config.title) {
        result = true;
      }
      return result;
    });
  };

  return InstructionFilterValueConverter;
}();

var MdButton = exports.MdButton = (_dec9 = (0, _aureliaTemplating.customAttribute)('md-button'), _dec10 = (0, _aureliaDependencyInjection.inject)(Element), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec9(_class10 = _dec10(_class10 = (_class11 = function () {
  function MdButton(element) {
    _classCallCheck(this, MdButton);

    _initDefineProp(this, 'disabled', _descriptor3, this);

    _initDefineProp(this, 'flat', _descriptor4, this);

    _initDefineProp(this, 'floating', _descriptor5, this);

    _initDefineProp(this, 'large', _descriptor6, this);

    this.attributeManager = new AttributeManager(element);
  }

  MdButton.prototype.attached = function attached() {
    var classes = [];

    if (getBooleanFromAttributeValue(this.flat)) {
      classes.push('btn-flat');
    }
    if (getBooleanFromAttributeValue(this.floating)) {
      classes.push('btn-floating');
    }
    if (getBooleanFromAttributeValue(this.large)) {
      classes.push('btn-large');
    }

    if (classes.length === 0) {
      classes.push('btn');
    }

    if (getBooleanFromAttributeValue(this.disabled)) {
      classes.push('disabled');
    }

    if (!getBooleanFromAttributeValue(this.flat)) {
      classes.push('accent');
    }
    this.attributeManager.addClasses(classes);
  };

  MdButton.prototype.detached = function detached() {
    this.attributeManager.removeClasses(['accent', 'btn', 'btn-flat', 'btn-large', 'disabled']);
  };

  MdButton.prototype.disabledChanged = function disabledChanged(newValue) {
    if (getBooleanFromAttributeValue(newValue)) {
      this.attributeManager.addClasses('disabled');
    } else {
      this.attributeManager.removeClasses('disabled');
    }
  };

  MdButton.prototype.flatChanged = function flatChanged(newValue) {
    if (getBooleanFromAttributeValue(newValue)) {
      this.attributeManager.removeClasses(['btn', 'accent']);
      this.attributeManager.addClasses('btn-flat');
    } else {
      this.attributeManager.removeClasses('btn-flat');
      this.attributeManager.addClasses(['btn', 'accent']);
    }
  };

  return MdButton;
}(), (_descriptor3 = _applyDecoratedDescriptor(_class11.prototype, 'disabled', [_dec11], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class11.prototype, 'flat', [_dec12], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class11.prototype, 'floating', [_dec13], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class11.prototype, 'large', [_dec14], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class11)) || _class10) || _class10);
var MdCard = exports.MdCard = (_dec15 = (0, _aureliaTemplating.customElement)('md-card'), _dec16 = (0, _aureliaDependencyInjection.inject)(Element), _dec17 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec18 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec19 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec20 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec15(_class13 = _dec16(_class13 = (_class14 = function () {
  function MdCard(element) {
    _classCallCheck(this, MdCard);

    _initDefineProp(this, 'mdImage', _descriptor7, this);

    _initDefineProp(this, 'mdReveal', _descriptor8, this);

    _initDefineProp(this, 'mdSize', _descriptor9, this);

    _initDefineProp(this, 'mdTitle', _descriptor10, this);

    this.element = element;
  }

  MdCard.prototype.attached = function attached() {
    this.mdReveal = getBooleanFromAttributeValue(this.mdReveal);
  };

  return MdCard;
}(), (_descriptor7 = _applyDecoratedDescriptor(_class14.prototype, 'mdImage', [_dec17], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class14.prototype, 'mdReveal', [_dec18], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class14.prototype, 'mdSize', [_dec19], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class14.prototype, 'mdTitle', [_dec20], {
  enumerable: true,
  initializer: null
})), _class14)) || _class13) || _class13);
var MdCarouselItem = exports.MdCarouselItem = (_dec21 = (0, _aureliaDependencyInjection.inject)(Element), _dec22 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec23 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec21(_class16 = (_class17 = function () {
  function MdCarouselItem(element) {
    _classCallCheck(this, MdCarouselItem);

    _initDefineProp(this, 'mdHref', _descriptor11, this);

    _initDefineProp(this, 'mdImage', _descriptor12, this);

    this.element = element;
  }

  MdCarouselItem.prototype.attached = function attached() {};

  return MdCarouselItem;
}(), (_descriptor11 = _applyDecoratedDescriptor(_class17.prototype, 'mdHref', [_dec22], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class17.prototype, 'mdImage', [_dec23], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
})), _class17)) || _class16);
var MdCarousel = exports.MdCarousel = (_dec24 = (0, _aureliaTemplating.customElement)('md-carousel'), _dec25 = (0, _aureliaDependencyInjection.inject)(Element), _dec26 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec24(_class19 = _dec25(_class19 = (_class20 = function () {
  function MdCarousel(element) {
    _classCallCheck(this, MdCarousel);

    _initDefineProp(this, 'mdSlider', _descriptor13, this);

    this.element = element;
  }

  MdCarousel.prototype.attached = function attached() {
    if (getBooleanFromAttributeValue(this.mdSlider)) {
      this.element.classList.add('carousel-slider');
    }

    if (getBooleanFromAttributeValue(this.mdSlider)) {
      $(this.element).carousel({ full_width: true });
    } else {
      $(this.element).carousel();
    }
  };

  return MdCarousel;
}(), (_descriptor13 = _applyDecoratedDescriptor(_class20.prototype, 'mdSlider', [_dec26], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class20)) || _class19) || _class19);
var MdCheckbox = exports.MdCheckbox = (_dec27 = (0, _aureliaTemplating.customElement)('md-checkbox'), _dec28 = (0, _aureliaDependencyInjection.inject)(Element), _dec29 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec30 = (0, _aureliaTemplating.bindable)(), _dec31 = (0, _aureliaTemplating.bindable)(), _dec27(_class22 = _dec28(_class22 = (_class23 = (_temp = _class24 = function () {
  function MdCheckbox(element) {
    _classCallCheck(this, MdCheckbox);

    _initDefineProp(this, 'mdChecked', _descriptor14, this);

    _initDefineProp(this, 'mdDisabled', _descriptor15, this);

    _initDefineProp(this, 'mdFilledIn', _descriptor16, this);

    this.element = element;
    this.controlId = 'md-checkbox-' + MdCheckbox.id++;
    this.handleChange = this.handleChange.bind(this);
  }

  MdCheckbox.prototype.attached = function attached() {
    this.attributeManager = new AttributeManager(this.checkbox);
    if (getBooleanFromAttributeValue(this.mdFilledIn)) {
      this.attributeManager.addClasses('filled-in');
    }
    if (this.mdChecked === null) {
      this.checkbox.indeterminate = true;
    } else {
      this.checkbox.indeterminate = false;
    }
    if (getBooleanFromAttributeValue(this.mdDisabled)) {
      this.checkbox.disabled = true;
    }
    this.checkbox.checked = getBooleanFromAttributeValue(this.mdChecked);
    this.checkbox.addEventListener('change', this.handleChange);
  };

  MdCheckbox.prototype.detached = function detached() {
    this.attributeManager.removeClasses(['filled-in', 'disabled']);
    this.checkbox.removeEventListener('change', this.handleChange);
  };

  MdCheckbox.prototype.handleChange = function handleChange() {
    this.mdChecked = this.checkbox.checked;
  };

  MdCheckbox.prototype.mdCheckedChanged = function mdCheckedChanged(newValue) {
    if (this.checkbox) {
      this.checkbox.checked = !!newValue;
    }
  };

  MdCheckbox.prototype.mdDisabledChanged = function mdDisabledChanged(newValue) {
    if (this.checkbox) {
      this.checkbox.disabled = !!newValue;
    }
  };

  return MdCheckbox;
}(), _class24.id = 0, _temp), (_descriptor14 = _applyDecoratedDescriptor(_class23.prototype, 'mdChecked', [_dec29], {
  enumerable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class23.prototype, 'mdDisabled', [_dec30], {
  enumerable: true,
  initializer: null
}), _descriptor16 = _applyDecoratedDescriptor(_class23.prototype, 'mdFilledIn', [_dec31], {
  enumerable: true,
  initializer: null
})), _class23)) || _class22) || _class22);
var MdCharCounter = exports.MdCharCounter = (_dec32 = (0, _aureliaTemplating.customAttribute)('md-char-counter'), _dec33 = (0, _aureliaDependencyInjection.inject)(Element), _dec34 = (0, _aureliaTemplating.bindable)(), _dec32(_class25 = _dec33(_class25 = (_class26 = function () {
  function MdCharCounter(element) {
    _classCallCheck(this, MdCharCounter);

    _initDefineProp(this, 'length', _descriptor17, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdCharCounter.prototype.attached = function attached() {
    var _this = this;

    this.length = parseInt(this.length, 10);

    if (this.element.tagName.toUpperCase() === 'INPUT') {
      this.attributeManager.addAttributes({ 'length': this.length });
      $(this.element).characterCounter();
    } else {
      $(this.element).find('input').each(function (i, el) {
        $(el).attr('length', _this.length);
      });
      $(this.element).find('input').characterCounter();
    }
  };

  MdCharCounter.prototype.detached = function detached() {
    this.attributeManager.removeAttributes(['length']);
  };

  return MdCharCounter;
}(), (_descriptor17 = _applyDecoratedDescriptor(_class26.prototype, 'length', [_dec34], {
  enumerable: true,
  initializer: function initializer() {
    return 120;
  }
})), _class26)) || _class25) || _class25);
var MdChip = exports.MdChip = (_dec35 = (0, _aureliaTemplating.customElement)('md-chip'), _dec36 = (0, _aureliaDependencyInjection.inject)(Element), _dec37 = (0, _aureliaTemplating.bindable)(), _dec35(_class28 = _dec36(_class28 = (_class29 = function () {
  function MdChip() {
    _classCallCheck(this, MdChip);

    _initDefineProp(this, 'mdClose', _descriptor18, this);
  }

  MdChip.prototype.attached = function attached() {
    this.mdClose = getBooleanFromAttributeValue(this.mdClose);
  };

  return MdChip;
}(), (_descriptor18 = _applyDecoratedDescriptor(_class29.prototype, 'mdClose', [_dec37], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class29)) || _class28) || _class28);
var MdCollapsible = exports.MdCollapsible = (_dec38 = (0, _aureliaTemplating.customAttribute)('md-collapsible'), _dec39 = (0, _aureliaTemplating.bindable)({ name: 'accordion', defaultValue: false }), _dec40 = (0, _aureliaTemplating.bindable)({ name: 'popout', defaultValue: false }), _dec41 = (0, _aureliaDependencyInjection.inject)(Element), _dec38(_class31 = _dec39(_class31 = _dec40(_class31 = _dec41(_class31 = function () {
  function MdCollapsible(element) {
    _classCallCheck(this, MdCollapsible);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdCollapsible.prototype.attached = function attached() {
    this.attributeManager.addClasses('collapsible');
    if (getBooleanFromAttributeValue(this.popout)) {
      this.attributeManager.addClasses('popout');
    }
    this.refresh();
  };

  MdCollapsible.prototype.detached = function detached() {
    this.attributeManager.removeClasses(['collapsible', 'popout']);
    this.attributeManager.removeAttributes(['data-collapsible']);
  };

  MdCollapsible.prototype.refresh = function refresh() {
    var accordion = getBooleanFromAttributeValue(this.accordion);
    if (accordion) {
      this.attributeManager.addAttributes({ 'data-collapsible': 'accordion' });
    } else {
      this.attributeManager.addAttributes({ 'data-collapsible': 'expandable' });
    }

    $(this.element).collapsible({
      accordion: accordion
    });
  };

  MdCollapsible.prototype.accordionChanged = function accordionChanged() {
    this.refresh();
  };

  return MdCollapsible;
}()) || _class31) || _class31) || _class31) || _class31);
var MdCollectionHeader = exports.MdCollectionHeader = (_dec42 = (0, _aureliaTemplating.customElement)('md-collection-header'), _dec43 = (0, _aureliaDependencyInjection.inject)(Element), _dec42(_class32 = _dec43(_class32 = function MdCollectionHeader(element) {
  _classCallCheck(this, MdCollectionHeader);

  this.element = element;
}) || _class32) || _class32);
var MdCollectionItem = exports.MdCollectionItem = (_dec44 = (0, _aureliaTemplating.customElement)('md-collection-item'), _dec44(_class33 = function MdCollectionItem() {
  _classCallCheck(this, MdCollectionItem);
}) || _class33);
var MdCollection = exports.MdCollection = (_dec45 = (0, _aureliaTemplating.customElement)('md-collection'), _dec46 = (0, _aureliaDependencyInjection.inject)(Element), _dec45(_class34 = _dec46(_class34 = function () {
  function MdCollection(element) {
    _classCallCheck(this, MdCollection);

    this.element = element;
  }

  MdCollection.prototype.attached = function attached() {
    var header = this.element.querySelector('md-collection-header');
    if (header) {
      this.anchor.classList.add('with-header');
    }
  };

  MdCollection.prototype.getSelected = function getSelected() {
    var items = [].slice.call(this.element.querySelectorAll('md-collection-selector'));
    return items.filter(function (i) {
      return i.au['md-collection-selector'].viewModel.isSelected;
    }).map(function (i) {
      return i.au['md-collection-selector'].viewModel.item;
    });
  };

  return MdCollection;
}()) || _class34) || _class34);
var MdlListSelector = exports.MdlListSelector = (_dec47 = (0, _aureliaTemplating.customElement)('md-collection-selector'), _dec48 = (0, _aureliaDependencyInjection.inject)(Element), _dec49 = (0, _aureliaTemplating.bindable)(), _dec50 = (0, _aureliaBinding.observable)(), _dec47(_class35 = _dec48(_class35 = (_class36 = function () {
  function MdlListSelector(element) {
    _classCallCheck(this, MdlListSelector);

    _initDefineProp(this, 'item', _descriptor19, this);

    _initDefineProp(this, 'isSelected', _descriptor20, this);

    this.element = element;
  }

  MdlListSelector.prototype.isSelectedChanged = function isSelectedChanged(newValue) {
    fireMaterializeEvent(this.element, 'selection-changed', { item: this.item, isSelected: this.isSelected });
  };

  return MdlListSelector;
}(), (_descriptor19 = _applyDecoratedDescriptor(_class36.prototype, 'item', [_dec49], {
  enumerable: true,
  initializer: null
}), _descriptor20 = _applyDecoratedDescriptor(_class36.prototype, 'isSelected', [_dec50], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class36)) || _class35) || _class35);

function shadeBlendConvert(p, from, to) {
  if (typeof p != "number" || p < -1 || p > 1 || typeof from != "string" || from[0] != 'r' && from[0] != '#' || typeof to != "string" && typeof to != "undefined") return null;
  var sbcRip = function sbcRip(d) {
    var l = d.length,
        RGB = new Object();
    if (l > 9) {
      d = d.split(",");
      if (d.length < 3 || d.length > 4) return null;
      RGB[0] = i(d[0].slice(4)), RGB[1] = i(d[1]), RGB[2] = i(d[2]), RGB[3] = d[3] ? parseFloat(d[3]) : -1;
    } else {
      switch (l) {case 8:case 6:case 3:case 2:case 1:
          return null;}
      if (l < 6) d = "#" + d[1] + d[1] + d[2] + d[2] + d[3] + d[3] + (l > 4 ? d[4] + "" + d[4] : "");
      d = i(d.slice(1), 16), RGB[0] = d >> 16 & 255, RGB[1] = d >> 8 & 255, RGB[2] = d & 255, RGB[3] = l == 9 || l == 5 ? r((d >> 24 & 255) / 255 * 10000) / 10000 : -1;
    }
    return RGB;
  };
  var i = parseInt,
      r = Math.round,
      h = from.length > 9,
      h = typeof to == "string" ? to.length > 9 ? true : to == "c" ? !h : false : h,
      b = p < 0,
      p = b ? p * -1 : p,
      to = to && to != "c" ? to : b ? "#000000" : "#FFFFFF",
      f = sbcRip(from),
      t = sbcRip(to);
  if (!f || !t) return null;
  if (h) return "rgb(" + r((t[0] - f[0]) * p + f[0]) + "," + r((t[1] - f[1]) * p + f[1]) + "," + r((t[2] - f[2]) * p + f[2]) + (f[3] < 0 && t[3] < 0 ? ")" : "," + (f[3] > -1 && t[3] > -1 ? r(((t[3] - f[3]) * p + f[3]) * 10000) / 10000 : t[3] < 0 ? f[3] : t[3]) + ")");else return "#" + (0x100000000 + (f[3] > -1 && t[3] > -1 ? r(((t[3] - f[3]) * p + f[3]) * 255) : t[3] > -1 ? r(t[3] * 255) : f[3] > -1 ? r(f[3] * 255) : 255) * 0x1000000 + r((t[0] - f[0]) * p + f[0]) * 0x10000 + r((t[1] - f[1]) * p + f[1]) * 0x100 + r((t[2] - f[2]) * p + f[2])).toString(16).slice(f[3] > -1 || t[3] > -1 ? 1 : 3);
}

var DarkenValueConverter = exports.DarkenValueConverter = function () {
  function DarkenValueConverter() {
    _classCallCheck(this, DarkenValueConverter);
  }

  DarkenValueConverter.prototype.toView = function toView(value, steps) {
    return shadeBlendConvert(-0.3 * parseFloat(steps, 10), value);
  };

  return DarkenValueConverter;
}();

var LightenValueConverter = exports.LightenValueConverter = function () {
  function LightenValueConverter() {
    _classCallCheck(this, LightenValueConverter);
  }

  LightenValueConverter.prototype.toView = function toView(value, steps) {
    return shadeBlendConvert(0.3 * parseFloat(steps, 10), value);
  };

  return LightenValueConverter;
}();

var AttributeManager = exports.AttributeManager = function () {
  function AttributeManager(element) {
    _classCallCheck(this, AttributeManager);

    this._colorClasses = ['accent', 'primary'];
    this.addedClasses = [];
    this.addedAttributes = {};

    this.element = element;
  }

  AttributeManager.prototype.addAttributes = function addAttributes(attrs) {
    var _this2 = this;

    var keys = Object.keys(attrs);
    keys.forEach(function (k) {
      if (!_this2.element.getAttribute(k)) {
        _this2.addedAttributes[k] = attrs[k];
        _this2.element.setAttribute(k, attrs[k]);
      } else if (_this2.element.getAttribute(k) !== attrs[k]) {
        _this2.element.setAttribute(k, attrs[k]);
      }
    });
  };

  AttributeManager.prototype.removeAttributes = function removeAttributes(attrs) {
    var _this3 = this;

    if (typeof attrs === 'string') {
      attrs = [attrs];
    }
    attrs.forEach(function (a) {
      if (_this3.element.getAttribute(a) && !!_this3.addedAttributes[a]) {
        _this3.element.removeAttribute(a);
        _this3.addedAttributes[a] = null;
        delete _this3.addedAttributes[a];
      }
    });
  };

  AttributeManager.prototype.addClasses = function addClasses(classes) {
    var _this4 = this;

    if (typeof classes === 'string') {
      classes = [classes];
    }
    classes.forEach(function (c) {
      var classListHasColor = _this4._colorClasses.filter(function (cc) {
        return _this4.element.classList.contains(cc);
      }).length > 0;
      if (_this4._colorClasses.indexOf(c) > -1 && classListHasColor) {} else {
          if (!_this4.element.classList.contains(c)) {
            _this4.addedClasses.push(c);
            _this4.element.classList.add(c);
          }
        }
    });
  };

  AttributeManager.prototype.removeClasses = function removeClasses(classes) {
    var _this5 = this;

    if (typeof classes === 'string') {
      classes = [classes];
    }
    classes.forEach(function (c) {
      if (_this5.element.classList.contains(c) && _this5.addedClasses.indexOf(c) > -1) {
        _this5.element.classList.remove(c);
        _this5.addedClasses.splice(_this5.addedClasses.indexOf(c), 1);
      }
    });
  };

  return AttributeManager;
}();

function getBooleanFromAttributeValue(value) {
  return value === true || value === 'true';
}

var constants = exports.constants = {
  eventPrefix: 'md-on-',
  bindablePrefix: 'md-'
};

function fireEvent(element, name) {
  var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  var event = new CustomEvent(name, {
    detail: data,
    bubbles: true
  });
  element.dispatchEvent(event);

  return event;
}

function fireMaterializeEvent(element, name) {
  var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  return fireEvent(element, '' + constants.eventPrefix + name, data);
}

var MdDatePicker = exports.MdDatePicker = (_dec51 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaTaskQueue.TaskQueue), _dec52 = (0, _aureliaTemplating.customAttribute)('md-datepicker'), _dec53 = (0, _aureliaTemplating.bindable)(), _dec54 = (0, _aureliaTemplating.bindable)(), _dec55 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.twoWay }), _dec56 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec57 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec58 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec51(_class39 = _dec52(_class39 = (_class40 = function () {
  function MdDatePicker(element, taskQueue) {
    _classCallCheck(this, MdDatePicker);

    _initDefineProp(this, 'container', _descriptor21, this);

    _initDefineProp(this, 'translation', _descriptor22, this);

    _initDefineProp(this, 'value', _descriptor23, this);

    _initDefineProp(this, 'selectMonths', _descriptor24, this);

    _initDefineProp(this, 'selectYears', _descriptor25, this);

    _initDefineProp(this, 'options', _descriptor26, this);

    this.element = element;
    this.log = (0, _aureliaLogging.getLogger)('md-datepicker');
    this.taskQueue = taskQueue;
  }

  MdDatePicker.prototype.bind = function bind() {
    var _this6 = this;

    this.selectMonths = getBooleanFromAttributeValue(this.selectMonths);
    this.selectYears = parseInt(this.selectYears, 10);
    this.element.classList.add('date-picker');

    var options = {
      selectMonths: this.selectMonths,
      selectYears: this.selectYears,
      onClose: function onClose() {
        $(document.activeElement).blur();
      }
    };
    var i18n = {};

    Object.assign(options, i18n);

    if (this.options) {
      Object.assign(options, this.options);

      if (this.options.onClose) {
        options.onClose = function () {
          this.options.onClose();
          $(document.activeElement).blur();
        };
      }
    }
    if (this.container) {
      options.container = this.container;
    }
    this.picker = $(this.element).pickadate(options).pickadate('picker');
    this.picker.on({
      'close': this.onClose.bind(this),
      'set': this.onSet.bind(this)
    });

    if (this.value) {
      this.picker.set('select', this.value);
    }
    if (this.options && this.options.editable) {
      $(this.element).on('keydown', function (e) {
        if (e.keyCode === 13) {
          var rawDate = $(_this6.element).val();
          if (rawDate) {
            rawDate = rawDate.split('/').join('-');
            var parsedDate = new Date(rawDate);
            _this6.picker.set('select', parsedDate);
          } else {
            _this6.openDatePicker();
          }
        } else {
          _this6.value = null;
        }
      });
    } else {
      $(this.element).on('focusin', function () {
        _this6.openDatePicker();
      });
    }
    if (this.options.showIcon) {
      this.element.classList.add('left');
      var calendarIcon = document.createElement('i');
      calendarIcon.classList.add('right');
      calendarIcon.classList.add('material-icons');
      calendarIcon.textContent = 'today';
      this.element.parentNode.insertBefore(calendarIcon, this.element.nextSibling);
      $(calendarIcon).on('click', this.onCalendarIconClick.bind(this));
    }

    this.movePickerCloserToSrc();
  };

  MdDatePicker.prototype.movePickerCloserToSrc = function movePickerCloserToSrc() {
    $(this.picker.$root).appendTo($(this.element).parent());
  };

  MdDatePicker.prototype.detached = function detached() {
    if (this.picker) {
      this.picker.stop();
    }
  };

  MdDatePicker.prototype.openDatePicker = function openDatePicker() {
    $(this.element).pickadate('open');
  };

  MdDatePicker.prototype.closeDatePicker = function closeDatePicker() {
    $(this.element).pickadate('close');
  };

  MdDatePicker.prototype.onClose = function onClose() {
    var selected = this.picker.get('select');
    this.value = selected ? selected.obj : null;
  };

  MdDatePicker.prototype.onCalendarIconClick = function onCalendarIconClick(event) {
    event.stopPropagation();
    this.openDatePicker();
  };

  MdDatePicker.prototype.onSet = function onSet(value) {
    if (this.options && this.options.closeOnSelect && value.select) {
      this.value = value.select;
      this.picker.close();
    }
  };

  MdDatePicker.prototype.valueChanged = function valueChanged(newValue) {
    this.log.debug('selectedChanged', this.value);

    this.picker.set('select', this.value);
  };

  return MdDatePicker;
}(), (_descriptor21 = _applyDecoratedDescriptor(_class40.prototype, 'container', [_dec53], {
  enumerable: true,
  initializer: null
}), _descriptor22 = _applyDecoratedDescriptor(_class40.prototype, 'translation', [_dec54], {
  enumerable: true,
  initializer: null
}), _descriptor23 = _applyDecoratedDescriptor(_class40.prototype, 'value', [_dec55], {
  enumerable: true,
  initializer: null
}), _descriptor24 = _applyDecoratedDescriptor(_class40.prototype, 'selectMonths', [_dec56], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor25 = _applyDecoratedDescriptor(_class40.prototype, 'selectYears', [_dec57], {
  enumerable: true,
  initializer: function initializer() {
    return 15;
  }
}), _descriptor26 = _applyDecoratedDescriptor(_class40.prototype, 'options', [_dec58], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
})), _class40)) || _class39) || _class39);
var MdDropdownElement = exports.MdDropdownElement = (_dec59 = (0, _aureliaTemplating.customElement)('md-dropdown'), _dec60 = (0, _aureliaDependencyInjection.inject)(Element), _dec61 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec62 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec63 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec64 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec65 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec66 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec67 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec68 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec59(_class42 = _dec60(_class42 = (_class43 = (_temp2 = _class44 = function () {
  function MdDropdownElement(element) {
    _classCallCheck(this, MdDropdownElement);

    _initDefineProp(this, 'alignment', _descriptor27, this);

    _initDefineProp(this, 'belowOrigin', _descriptor28, this);

    _initDefineProp(this, 'constrainWidth', _descriptor29, this);

    _initDefineProp(this, 'gutter', _descriptor30, this);

    _initDefineProp(this, 'hover', _descriptor31, this);

    _initDefineProp(this, 'mdTitle', _descriptor32, this);

    _initDefineProp(this, 'inDuration', _descriptor33, this);

    _initDefineProp(this, 'outDuration', _descriptor34, this);

    this.element = element;
    this.controlId = 'md-dropdown-' + MdDropdown.id++;
  }

  MdDropdownElement.prototype.attached = function attached() {
    $(this.element).dropdown({
      alignment: this.alignment,
      belowOrigin: getBooleanFromAttributeValue(this.belowOrigin),
      constrain_width: getBooleanFromAttributeValue(this.constrainWidth),
      gutter: parseInt(this.gutter, 10),
      hover: getBooleanFromAttributeValue(this.hover),
      inDuration: parseInt(this.inDuration, 10),
      outDuration: parseInt(this.outDuration, 10)
    });
  };

  return MdDropdownElement;
}(), _class44.id = 0, _temp2), (_descriptor27 = _applyDecoratedDescriptor(_class43.prototype, 'alignment', [_dec61], {
  enumerable: true,
  initializer: function initializer() {
    return 'left';
  }
}), _descriptor28 = _applyDecoratedDescriptor(_class43.prototype, 'belowOrigin', [_dec62], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor29 = _applyDecoratedDescriptor(_class43.prototype, 'constrainWidth', [_dec63], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor30 = _applyDecoratedDescriptor(_class43.prototype, 'gutter', [_dec64], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor31 = _applyDecoratedDescriptor(_class43.prototype, 'hover', [_dec65], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor32 = _applyDecoratedDescriptor(_class43.prototype, 'mdTitle', [_dec66], {
  enumerable: true,
  initializer: null
}), _descriptor33 = _applyDecoratedDescriptor(_class43.prototype, 'inDuration', [_dec67], {
  enumerable: true,
  initializer: function initializer() {
    return 300;
  }
}), _descriptor34 = _applyDecoratedDescriptor(_class43.prototype, 'outDuration', [_dec68], {
  enumerable: true,
  initializer: function initializer() {
    return 225;
  }
})), _class43)) || _class42) || _class42);
var MdDropdown = exports.MdDropdown = (_dec69 = (0, _aureliaTemplating.customAttribute)('md-dropdown'), _dec70 = (0, _aureliaDependencyInjection.inject)(Element), _dec71 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec72 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec73 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec74 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec75 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec76 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec77 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec78 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec79 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec69(_class45 = _dec70(_class45 = (_class46 = function () {
  function MdDropdown(element) {
    _classCallCheck(this, MdDropdown);

    _initDefineProp(this, 'activates', _descriptor35, this);

    _initDefineProp(this, 'alignment', _descriptor36, this);

    _initDefineProp(this, 'belowOrigin', _descriptor37, this);

    _initDefineProp(this, 'constrainWidth', _descriptor38, this);

    _initDefineProp(this, 'gutter', _descriptor39, this);

    _initDefineProp(this, 'hover', _descriptor40, this);

    _initDefineProp(this, 'mdTitle', _descriptor41, this);

    _initDefineProp(this, 'inDuration', _descriptor42, this);

    _initDefineProp(this, 'outDuration', _descriptor43, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdDropdown.prototype.attached = function attached() {
    this.contentAttributeManager = new AttributeManager(document.getElementById(this.activates));

    this.attributeManager.addClasses('dropdown-button');
    this.contentAttributeManager.addClasses('dropdown-content');
    this.attributeManager.addAttributes({ 'data-activates': this.activates });
    $(this.element).dropdown({
      alignment: this.alignment,
      belowOrigin: getBooleanFromAttributeValue(this.belowOrigin),
      constrain_width: getBooleanFromAttributeValue(this.constrainWidth),
      gutter: parseInt(this.gutter, 10),
      hover: getBooleanFromAttributeValue(this.hover),
      inDuration: parseInt(this.inDuration, 10),
      outDuration: parseInt(this.outDuration, 10)
    });
  };

  MdDropdown.prototype.detached = function detached() {
    this.attributeManager.removeAttributes('data-activates');
    this.attributeManager.removeClasses('dropdown-button');
    this.contentAttributeManager.removeClasses('dropdown-content');
  };

  return MdDropdown;
}(), (_descriptor35 = _applyDecoratedDescriptor(_class46.prototype, 'activates', [_dec71], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor36 = _applyDecoratedDescriptor(_class46.prototype, 'alignment', [_dec72], {
  enumerable: true,
  initializer: function initializer() {
    return 'left';
  }
}), _descriptor37 = _applyDecoratedDescriptor(_class46.prototype, 'belowOrigin', [_dec73], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor38 = _applyDecoratedDescriptor(_class46.prototype, 'constrainWidth', [_dec74], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor39 = _applyDecoratedDescriptor(_class46.prototype, 'gutter', [_dec75], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor40 = _applyDecoratedDescriptor(_class46.prototype, 'hover', [_dec76], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor41 = _applyDecoratedDescriptor(_class46.prototype, 'mdTitle', [_dec77], {
  enumerable: true,
  initializer: null
}), _descriptor42 = _applyDecoratedDescriptor(_class46.prototype, 'inDuration', [_dec78], {
  enumerable: true,
  initializer: function initializer() {
    return 300;
  }
}), _descriptor43 = _applyDecoratedDescriptor(_class46.prototype, 'outDuration', [_dec79], {
  enumerable: true,
  initializer: function initializer() {
    return 225;
  }
})), _class46)) || _class45) || _class45);
var MdFab = exports.MdFab = (_dec80 = (0, _aureliaTemplating.customElement)('md-fab'), _dec81 = (0, _aureliaDependencyInjection.inject)(Element), _dec82 = (0, _aureliaTemplating.bindable)(), _dec83 = (0, _aureliaTemplating.bindable)(), _dec80(_class48 = _dec81(_class48 = (_class49 = function () {
  function MdFab(element) {
    _classCallCheck(this, MdFab);

    _initDefineProp(this, 'mdFixed', _descriptor44, this);

    _initDefineProp(this, 'mdLarge', _descriptor45, this);

    this.element = element;
  }

  MdFab.prototype.attached = function attached() {
    this.mdFixed = getBooleanFromAttributeValue(this.mdFixed);
    this.mdLarge = getBooleanFromAttributeValue(this.mdLarge);
  };

  return MdFab;
}(), (_descriptor44 = _applyDecoratedDescriptor(_class49.prototype, 'mdFixed', [_dec82], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor45 = _applyDecoratedDescriptor(_class49.prototype, 'mdLarge', [_dec83], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class49)) || _class48) || _class48);
var MdFileInput = exports.MdFileInput = (_dec84 = (0, _aureliaTemplating.customElement)('md-file'), _dec85 = (0, _aureliaDependencyInjection.inject)(Element), _dec86 = (0, _aureliaTemplating.bindable)(), _dec87 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec88 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec84(_class51 = _dec85(_class51 = (_class52 = function () {
  function MdFileInput(element) {
    _classCallCheck(this, MdFileInput);

    _initDefineProp(this, 'mdCaption', _descriptor46, this);

    _initDefineProp(this, 'mdMultiple', _descriptor47, this);

    _initDefineProp(this, 'mdLabelValue', _descriptor48, this);

    this.files = [];
    this._suspendUpdate = false;

    this.element = element;
    this.handleChangeFromNativeInput = this.handleChangeFromNativeInput.bind(this);
  }

  MdFileInput.prototype.attached = function attached() {
    this.mdMultiple = getBooleanFromAttributeValue(this.mdMultiple);
    $(this.filePath).on('change', this.handleChangeFromNativeInput);
  };

  MdFileInput.prototype.detached = function detached() {
    $(this.element).off('change', this.handleChangeFromNativeInput);
  };

  MdFileInput.prototype.handleChangeFromNativeInput = function handleChangeFromNativeInput() {
    if (!this._suspendUpdate) {
      this._suspendUpdate = true;
      fireEvent(this.filePath, 'change', { files: this.files });
      fireMaterializeEvent(this.filePath, 'change', { files: this.files });
      this._suspendUpdate = false;
    }
  };

  return MdFileInput;
}(), (_descriptor46 = _applyDecoratedDescriptor(_class52.prototype, 'mdCaption', [_dec86], {
  enumerable: true,
  initializer: function initializer() {
    return 'File';
  }
}), _descriptor47 = _applyDecoratedDescriptor(_class52.prototype, 'mdMultiple', [_dec87], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor48 = _applyDecoratedDescriptor(_class52.prototype, 'mdLabelValue', [_dec88], {
  enumerable: true,
  initializer: null
})), _class52)) || _class51) || _class51);
var MdFooter = exports.MdFooter = (_dec89 = (0, _aureliaTemplating.customAttribute)('md-footer'), _dec90 = (0, _aureliaDependencyInjection.inject)(Element), _dec89(_class54 = _dec90(_class54 = function () {
  function MdFooter(element) {
    _classCallCheck(this, MdFooter);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdFooter.prototype.bind = function bind() {
    this.attributeManager.addClasses('page-footer');
  };

  MdFooter.prototype.unbind = function unbind() {
    this.attributeManager.removeClasses('page-footer');
  };

  return MdFooter;
}()) || _class54) || _class54);
var MdPrefix = exports.MdPrefix = (_dec91 = (0, _aureliaTemplating.customAttribute)('md-prefix'), _dec92 = (0, _aureliaDependencyInjection.inject)(Element), _dec91(_class55 = _dec92(_class55 = function () {
  function MdPrefix(element) {
    _classCallCheck(this, MdPrefix);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdPrefix.prototype.bind = function bind() {
    this.attributeManager.addClasses('prefix');
  };

  MdPrefix.prototype.unbind = function unbind() {
    this.attributeManager.removeClasses('prefix');
  };

  return MdPrefix;
}()) || _class55) || _class55);
var MdInputUpdateService = exports.MdInputUpdateService = (_dec93 = (0, _aureliaDependencyInjection.inject)(_aureliaTaskQueue.TaskQueue), _dec93(_class56 = function () {
  function MdInputUpdateService(taskQueue) {
    _classCallCheck(this, MdInputUpdateService);

    this._updateCalled = false;

    this.log = (0, _aureliaLogging.getLogger)('MdInputUpdateService');
    this.taskQueue = taskQueue;
  }

  MdInputUpdateService.prototype.materializeUpdate = function materializeUpdate() {
    this.log.debug('executing Materialize.updateTextFields');
    Materialize.updateTextFields();
    this._updateCalled = false;
  };

  MdInputUpdateService.prototype.update = function update() {
    this.log.debug('update called');
    if (!this._updateCalled) {
      this._updateCalled = true;
      this.taskQueue.queueTask(this.materializeUpdate.bind(this));
    }
  };

  return MdInputUpdateService;
}()) || _class56);
var MdInput = exports.MdInput = (_dec94 = (0, _aureliaTemplating.customElement)('md-input'), _dec95 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaTaskQueue.TaskQueue, MdInputUpdateService), _dec96 = (0, _aureliaTemplating.bindable)(), _dec97 = (0, _aureliaTemplating.bindable)(), _dec98 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec99 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec100 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec101 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec102 = (0, _aureliaTemplating.bindable)(), _dec103 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec94(_class58 = _dec95(_class58 = (_class59 = (_temp3 = _class60 = function () {
  function MdInput(element, taskQueue, updateService) {
    _classCallCheck(this, MdInput);

    _initDefineProp(this, 'mdLabel', _descriptor49, this);

    _initDefineProp(this, 'mdDisabled', _descriptor50, this);

    _initDefineProp(this, 'mdPlaceholder', _descriptor51, this);

    _initDefineProp(this, 'mdTextArea', _descriptor52, this);

    _initDefineProp(this, 'mdType', _descriptor53, this);

    _initDefineProp(this, 'mdValidate', _descriptor54, this);

    _initDefineProp(this, 'mdValidateError', _descriptor55, this);

    _initDefineProp(this, 'mdValue', _descriptor56, this);

    this.element = element;
    this.taskQueue = taskQueue;
    this.controlId = 'md-input-' + MdInput.id++;
    this.updateService = updateService;
  }

  MdInput.prototype.bind = function bind() {
    this.mdTextArea = getBooleanFromAttributeValue(this.mdTextArea);
  };

  MdInput.prototype.attached = function attached() {
    if (getBooleanFromAttributeValue(this.mdValidate)) {
      this.input.classList.add('validate');
    }
    if (this.mdValidateError) {
      this.label.setAttribute('data-error', this.mdValidateError);
    }
    if (this.mdPlaceholder) {
      this.input.setAttribute('placeholder', this.mdPlaceholder);
    }
    this.updateService.update();
  };

  MdInput.prototype.mdValueChanged = function mdValueChanged() {
    this.updateService.update();
    if (this.mdTextArea) {
      $(this.input).trigger('autoresize');
    }
  };

  return MdInput;
}(), _class60.id = 0, _temp3), (_descriptor49 = _applyDecoratedDescriptor(_class59.prototype, 'mdLabel', [_dec96], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor50 = _applyDecoratedDescriptor(_class59.prototype, 'mdDisabled', [_dec97], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor51 = _applyDecoratedDescriptor(_class59.prototype, 'mdPlaceholder', [_dec98], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor52 = _applyDecoratedDescriptor(_class59.prototype, 'mdTextArea', [_dec99], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor53 = _applyDecoratedDescriptor(_class59.prototype, 'mdType', [_dec100], {
  enumerable: true,
  initializer: function initializer() {
    return 'text';
  }
}), _descriptor54 = _applyDecoratedDescriptor(_class59.prototype, 'mdValidate', [_dec101], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor55 = _applyDecoratedDescriptor(_class59.prototype, 'mdValidateError', [_dec102], {
  enumerable: true,
  initializer: null
}), _descriptor56 = _applyDecoratedDescriptor(_class59.prototype, 'mdValue', [_dec103], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
})), _class59)) || _class58) || _class58);
var MdModalTrigger = exports.MdModalTrigger = (_dec104 = (0, _aureliaTemplating.customAttribute)('md-modal-trigger'), _dec105 = (0, _aureliaDependencyInjection.inject)(Element), _dec106 = (0, _aureliaTemplating.bindable)(), _dec104(_class61 = _dec105(_class61 = (_class62 = function () {
  function MdModalTrigger(element) {
    _classCallCheck(this, MdModalTrigger);

    _initDefineProp(this, 'dismissible', _descriptor57, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
    this.onComplete = this.onComplete.bind(this);
  }

  MdModalTrigger.prototype.attached = function attached() {
    this.attributeManager.addClasses('modal-trigger');
    $(this.element).leanModal({
      complete: this.onComplete,
      dismissible: getBooleanFromAttributeValue(this.dismissible)
    });
  };

  MdModalTrigger.prototype.detached = function detached() {
    this.attributeManager.removeClasses('modal-trigger');
  };

  MdModalTrigger.prototype.onComplete = function onComplete() {
    fireMaterializeEvent(this.element, 'modal-complete');
  };

  return MdModalTrigger;
}(), (_descriptor57 = _applyDecoratedDescriptor(_class62.prototype, 'dismissible', [_dec106], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
})), _class62)) || _class61) || _class61);
var MdNavbar = exports.MdNavbar = (_dec107 = (0, _aureliaTemplating.customElement)('md-navbar'), _dec108 = (0, _aureliaDependencyInjection.inject)(Element), _dec109 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec107(_class64 = _dec108(_class64 = (_class65 = function () {
  function MdNavbar(element) {
    _classCallCheck(this, MdNavbar);

    _initDefineProp(this, 'mdFixed', _descriptor58, this);

    this.element = element;
  }

  MdNavbar.prototype.attached = function attached() {
    this.fixedAttributeManager = new AttributeManager(this.fixedAnchor);
    if (getBooleanFromAttributeValue(this.mdFixed)) {
      this.fixedAttributeManager.addClasses('navbar-fixed');
    }
  };

  MdNavbar.prototype.detached = function detached() {
    if (getBooleanFromAttributeValue(this.mdFixed)) {
      this.fixedAttributeManager.removeClasses('navbar-fixed');
    }
  };

  return MdNavbar;
}(), (_descriptor58 = _applyDecoratedDescriptor(_class65.prototype, 'mdFixed', [_dec109], {
  enumerable: true,
  initializer: null
})), _class65)) || _class64) || _class64);
var MdPagination = exports.MdPagination = (_dec110 = (0, _aureliaTemplating.customElement)('md-pagination'), _dec111 = (0, _aureliaDependencyInjection.inject)(Element), _dec112 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec113 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec114 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec115 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec116 = (0, _aureliaTemplating.bindable)(), _dec117 = (0, _aureliaTemplating.bindable)(), _dec118 = (0, _aureliaTemplating.bindable)(), _dec110(_class67 = _dec111(_class67 = (_class68 = function () {
  function MdPagination(element) {
    _classCallCheck(this, MdPagination);

    _initDefineProp(this, 'mdActivePage', _descriptor59, this);

    _initDefineProp(this, 'mdPages', _descriptor60, this);

    _initDefineProp(this, 'mdVisiblePageLinks', _descriptor61, this);

    _initDefineProp(this, 'mdPageLinks', _descriptor62, this);

    _initDefineProp(this, 'mdShowFirstLast', _descriptor63, this);

    _initDefineProp(this, 'mdShowPrevNext', _descriptor64, this);

    _initDefineProp(this, 'mdShowPageLinks', _descriptor65, this);

    this.element = element;
  }

  MdPagination.prototype.bind = function bind() {
    this.mdPages = parseInt(this.mdPages, 10);

    this.mdVisiblePageLinks = Math.min(parseInt(this.mdVisiblePageLinks, 10), this.mdPages);
    this.mdShowPrevNext = getBooleanFromAttributeValue(this.mdShowPrevNext);
    this.mdPageLinks = this.generatePageLinks();
  };

  MdPagination.prototype.setActivePage = function setActivePage(page) {
    this.mdActivePage = page;
    this.mdPageLinks = this.generatePageLinks();
    fireMaterializeEvent(this.element, 'page-changed', this.mdActivePage);
  };

  MdPagination.prototype.setFirstPage = function setFirstPage() {
    if (this.mdActivePage > 1) {
      this.setActivePage(1);
    }
  };

  MdPagination.prototype.setLastPage = function setLastPage() {
    if (this.mdActivePage < this.mdPages) {
      this.setActivePage(this.mdPages);
    }
  };

  MdPagination.prototype.setPreviousPage = function setPreviousPage() {
    if (this.mdActivePage > 1) {
      this.setActivePage(this.mdActivePage - 1);
    }
  };

  MdPagination.prototype.setNextPage = function setNextPage() {
    if (this.mdActivePage < this.mdPages) {
      this.setActivePage(this.mdActivePage + 1);
    }
  };

  MdPagination.prototype.mdVisiblePageLinksChanged = function mdVisiblePageLinksChanged() {
    this.mdPageLinks = this.generatePageLinks();
  };

  MdPagination.prototype.generatePageLinks = function generatePageLinks() {
    var numberOfLinks = parseInt(this.mdVisiblePageLinks, 10);
    var midPoint = numberOfLinks / 2 + 1;
    var start = Math.max(this.mdActivePage - midPoint, 0);
    var end = Math.min(start + numberOfLinks, this.mdPages);

    var list = [];
    for (var i = start; i < end; i++) {
      list.push(i);
    }

    return list;
  };

  return MdPagination;
}(), (_descriptor59 = _applyDecoratedDescriptor(_class68.prototype, 'mdActivePage', [_dec112], {
  enumerable: true,
  initializer: function initializer() {
    return 1;
  }
}), _descriptor60 = _applyDecoratedDescriptor(_class68.prototype, 'mdPages', [_dec113], {
  enumerable: true,
  initializer: function initializer() {
    return 5;
  }
}), _descriptor61 = _applyDecoratedDescriptor(_class68.prototype, 'mdVisiblePageLinks', [_dec114], {
  enumerable: true,
  initializer: function initializer() {
    return 15;
  }
}), _descriptor62 = _applyDecoratedDescriptor(_class68.prototype, 'mdPageLinks', [_dec115], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor63 = _applyDecoratedDescriptor(_class68.prototype, 'mdShowFirstLast', [_dec116], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor64 = _applyDecoratedDescriptor(_class68.prototype, 'mdShowPrevNext', [_dec117], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor65 = _applyDecoratedDescriptor(_class68.prototype, 'mdShowPageLinks', [_dec118], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
})), _class68)) || _class67) || _class67);
var MdParallax = exports.MdParallax = (_dec119 = (0, _aureliaTemplating.customAttribute)('md-parallax'), _dec120 = (0, _aureliaDependencyInjection.inject)(Element), _dec119(_class70 = _dec120(_class70 = function () {
  function MdParallax(element) {
    _classCallCheck(this, MdParallax);

    this.element = element;
  }

  MdParallax.prototype.attached = function attached() {
    $(this.element).parallax();
  };

  MdParallax.prototype.detached = function detached() {};

  return MdParallax;
}()) || _class70) || _class70);
var MdProgress = exports.MdProgress = (_dec121 = (0, _aureliaTemplating.customElement)('md-progress'), _dec122 = (0, _aureliaDependencyInjection.inject)(Element), _dec123 = (0, _aureliaTemplating.bindable)(), _dec124 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec125 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec121(_class71 = _dec122(_class71 = (_class72 = function MdProgress(element) {
  _classCallCheck(this, MdProgress);

  _initDefineProp(this, 'mdColor', _descriptor66, this);

  _initDefineProp(this, 'mdType', _descriptor67, this);

  _initDefineProp(this, 'mdValue', _descriptor68, this);

  this.element = element;
}, (_descriptor66 = _applyDecoratedDescriptor(_class72.prototype, 'mdColor', [_dec123], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor67 = _applyDecoratedDescriptor(_class72.prototype, 'mdType', [_dec124], {
  enumerable: true,
  initializer: function initializer() {
    return 'linear';
  }
}), _descriptor68 = _applyDecoratedDescriptor(_class72.prototype, 'mdValue', [_dec125], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class72)) || _class71) || _class71);
var MdPushpin = exports.MdPushpin = (_dec126 = (0, _aureliaTemplating.customAttribute)('md-pushpin'), _dec127 = (0, _aureliaDependencyInjection.inject)(Element), _dec128 = (0, _aureliaTemplating.bindable)(), _dec129 = (0, _aureliaTemplating.bindable)(), _dec130 = (0, _aureliaTemplating.bindable)(), _dec126(_class74 = _dec127(_class74 = (_class75 = function () {
  function MdPushpin(element) {
    _classCallCheck(this, MdPushpin);

    _initDefineProp(this, 'bottom', _descriptor69, this);

    _initDefineProp(this, 'offset', _descriptor70, this);

    _initDefineProp(this, 'top', _descriptor71, this);

    this.element = element;
  }

  MdPushpin.prototype.attached = function attached() {
    $(this.element).pushpin({
      bottom: this.bottom === Infinity ? Infinity : parseInt(this.bottom, 10),
      offset: parseInt(this.offset, 10),
      top: parseInt(this.top, 10)
    });
  };

  MdPushpin.prototype.detached = function detached() {};

  return MdPushpin;
}(), (_descriptor69 = _applyDecoratedDescriptor(_class75.prototype, 'bottom', [_dec128], {
  enumerable: true,
  initializer: function initializer() {
    return Infinity;
  }
}), _descriptor70 = _applyDecoratedDescriptor(_class75.prototype, 'offset', [_dec129], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor71 = _applyDecoratedDescriptor(_class75.prototype, 'top', [_dec130], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
})), _class75)) || _class74) || _class74);
var MdRadio = exports.MdRadio = (_dec131 = (0, _aureliaTemplating.customElement)('md-radio'), _dec132 = (0, _aureliaDependencyInjection.inject)(Element), _dec133 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec134 = (0, _aureliaTemplating.bindable)(), _dec135 = (0, _aureliaTemplating.bindable)(), _dec136 = (0, _aureliaTemplating.bindable)(), _dec137 = (0, _aureliaTemplating.bindable)(), _dec138 = (0, _aureliaTemplating.bindable)(), _dec131(_class77 = _dec132(_class77 = (_class78 = (_temp4 = _class79 = function () {
  function MdRadio(element) {
    _classCallCheck(this, MdRadio);

    _initDefineProp(this, 'mdChecked', _descriptor72, this);

    _initDefineProp(this, 'mdDisabled', _descriptor73, this);

    _initDefineProp(this, 'mdGap', _descriptor74, this);

    _initDefineProp(this, 'mdModel', _descriptor75, this);

    _initDefineProp(this, 'mdName', _descriptor76, this);

    _initDefineProp(this, 'mdValue', _descriptor77, this);

    this.element = element;
    this.controlId = 'md-radio-' + MdRadio.id++;
  }

  MdRadio.prototype.attached = function attached() {
    this.attributeManager = new AttributeManager(this.radio);
    if (getBooleanFromAttributeValue(this.mdGap)) {
      this.attributeManager.addClasses('with-gap');
    }
    if (getBooleanFromAttributeValue(this.mdDisabled)) {
      this.radio.disabled = true;
    }
  };

  MdRadio.prototype.detached = function detached() {
    this.attributeManager.removeClasses(['with-gap', 'disabled']);
  };

  MdRadio.prototype.mdDisabledChanged = function mdDisabledChanged(newValue) {
    if (this.radio) {
      this.radio.disabled = !!newValue;
    }
  };

  return MdRadio;
}(), _class79.id = 0, _temp4), (_descriptor72 = _applyDecoratedDescriptor(_class78.prototype, 'mdChecked', [_dec133], {
  enumerable: true,
  initializer: null
}), _descriptor73 = _applyDecoratedDescriptor(_class78.prototype, 'mdDisabled', [_dec134], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor74 = _applyDecoratedDescriptor(_class78.prototype, 'mdGap', [_dec135], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor75 = _applyDecoratedDescriptor(_class78.prototype, 'mdModel', [_dec136], {
  enumerable: true,
  initializer: null
}), _descriptor76 = _applyDecoratedDescriptor(_class78.prototype, 'mdName', [_dec137], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor77 = _applyDecoratedDescriptor(_class78.prototype, 'mdValue', [_dec138], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
})), _class78)) || _class77) || _class77);
var MdRange = exports.MdRange = (_dec139 = (0, _aureliaTemplating.customElement)('md-range'), _dec140 = (0, _aureliaDependencyInjection.inject)(Element), _dec141 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec142 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec143 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec144 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec139(_class80 = _dec140(_class80 = (_class81 = function MdRange(element) {
  _classCallCheck(this, MdRange);

  _initDefineProp(this, 'mdMin', _descriptor78, this);

  _initDefineProp(this, 'mdMax', _descriptor79, this);

  _initDefineProp(this, 'mdStep', _descriptor80, this);

  _initDefineProp(this, 'mdValue', _descriptor81, this);

  this.element = element;
  this.log = (0, _aureliaLogging.getLogger)('md-range');
}, (_descriptor78 = _applyDecoratedDescriptor(_class81.prototype, 'mdMin', [_dec141], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor79 = _applyDecoratedDescriptor(_class81.prototype, 'mdMax', [_dec142], {
  enumerable: true,
  initializer: function initializer() {
    return 100;
  }
}), _descriptor80 = _applyDecoratedDescriptor(_class81.prototype, 'mdStep', [_dec143], {
  enumerable: true,
  initializer: function initializer() {
    return 1;
  }
}), _descriptor81 = _applyDecoratedDescriptor(_class81.prototype, 'mdValue', [_dec144], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
})), _class81)) || _class80) || _class80);
var ScrollfirePatch = exports.ScrollfirePatch = (_temp5 = _class83 = function () {
  function ScrollfirePatch() {
    _classCallCheck(this, ScrollfirePatch);
  }

  ScrollfirePatch.prototype.patch = function patch() {
    if (!ScrollfirePatch.patched) {
      ScrollfirePatch.patched = true;

      window.Materialize.scrollFire = function (options) {
        var didScroll = false;
        window.addEventListener('scroll', function () {
          didScroll = true;
        });

        setInterval(function () {
          if (didScroll) {
            didScroll = false;

            var windowScroll = window.pageYOffset + window.innerHeight;
            for (var i = 0; i < options.length; i++) {
              var value = options[i];
              var selector = value.selector;
              var offset = value.offset;
              var callback = value.callback;

              var currentElement = document.querySelector(selector);
              if (currentElement !== null) {
                var elementOffset = currentElement.getBoundingClientRect().top + window.pageYOffset;

                if (windowScroll > elementOffset + offset) {
                  if (value.done !== true) {
                    if (typeof callback === 'string') {
                      var callbackFunc = new Function(callback);
                      callbackFunc();
                    } else if (typeof callback === 'function') {
                      callback();
                    }
                    value.done = true;
                  }
                }
              }
            }
          }
        }, 100);
      };
    }
  };

  return ScrollfirePatch;
}(), _class83.patched = false, _temp5);
var MdScrollfireTarget = exports.MdScrollfireTarget = (_dec145 = (0, _aureliaTemplating.customAttribute)('md-scrollfire-target'), _dec146 = (0, _aureliaDependencyInjection.inject)(Element), _dec147 = (0, _aureliaTemplating.bindable)(), _dec148 = (0, _aureliaTemplating.bindable)(), _dec145(_class84 = _dec146(_class84 = (_class85 = function MdScrollfireTarget(element) {
  _classCallCheck(this, MdScrollfireTarget);

  _initDefineProp(this, 'callback', _descriptor82, this);

  _initDefineProp(this, 'offset', _descriptor83, this);

  this.element = element;
}, (_descriptor82 = _applyDecoratedDescriptor(_class85.prototype, 'callback', [_dec147], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor83 = _applyDecoratedDescriptor(_class85.prototype, 'offset', [_dec148], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
})), _class85)) || _class84) || _class84);
var MdScrollfire = exports.MdScrollfire = (_dec149 = (0, _aureliaTemplating.customAttribute)('md-scrollfire'), _dec150 = (0, _aureliaDependencyInjection.inject)(Element), _dec149(_class87 = _dec150(_class87 = function () {
  function MdScrollfire(element) {
    _classCallCheck(this, MdScrollfire);

    this.targetId = 0;

    this.element = element;
    this.log = (0, _aureliaLogging.getLogger)('md-scrollfire');
  }

  MdScrollfire.prototype.attached = function attached() {
    var _this7 = this;

    var targets = $('[md-scrollfire-target]', this.element);
    if (targets.length > 0) {
      (function () {
        _this7.log.debug('targets', targets);
        var self = _this7;
        var options = [];
        targets.each(function (i, el) {
          var target = $(el);
          if (!target.attr('id')) {
            target.attr('id', 'md-scrollfire-target-' + self.targetId++);
          }
          options.push({
            selector: '#' + target.attr('id'),
            callback: target.get(0).au['md-scrollfire-target'].viewModel.callback,
            offset: parseInt(target.get(0).au['md-scrollfire-target'].viewModel.offset, 10)
          });
        });
        if (options.length > 0) {
          _this7.log.debug('configuring scrollFire with these options:', options);
          Materialize.scrollFire(options);
        }
      })();
    }
  };

  return MdScrollfire;
}()) || _class87) || _class87);
var MdScrollSpy = exports.MdScrollSpy = (_dec151 = (0, _aureliaTemplating.customAttribute)('md-scrollspy'), _dec152 = (0, _aureliaDependencyInjection.inject)(Element), _dec153 = (0, _aureliaTemplating.bindable)(), _dec151(_class89 = _dec152(_class89 = (_class90 = function () {
  function MdScrollSpy(element) {
    _classCallCheck(this, MdScrollSpy);

    _initDefineProp(this, 'target', _descriptor84, this);

    this.element = element;
  }

  MdScrollSpy.prototype.attached = function attached() {
    $(this.target, this.element).scrollSpy();
  };

  MdScrollSpy.prototype.detached = function detached() {};

  return MdScrollSpy;
}(), (_descriptor84 = _applyDecoratedDescriptor(_class90.prototype, 'target', [_dec153], {
  enumerable: true,
  initializer: null
})), _class90)) || _class89) || _class89);
var MdSelect = exports.MdSelect = (_dec154 = (0, _aureliaDependencyInjection.inject)(Element, LogManager, _aureliaBinding.BindingEngine, _aureliaTaskQueue.TaskQueue), _dec155 = (0, _aureliaTemplating.customAttribute)('md-select'), _dec156 = (0, _aureliaTemplating.bindable)(), _dec154(_class92 = _dec155(_class92 = (_class93 = function () {
  function MdSelect(element, logManager, bindingEngine, taskQueue) {
    _classCallCheck(this, MdSelect);

    _initDefineProp(this, 'disabled', _descriptor85, this);

    this._suspendUpdate = false;
    this.subscriptions = [];

    this.element = element;
    this.taskQueue = taskQueue;
    this.handleChangeFromViewModel = this.handleChangeFromViewModel.bind(this);
    this.handleChangeFromNativeSelect = this.handleChangeFromNativeSelect.bind(this);
    this.log = LogManager.getLogger('md-select');
    this.bindingEngine = bindingEngine;
  }

  MdSelect.prototype.attached = function attached() {
    this.subscriptions.push(this.bindingEngine.propertyObserver(this.element, 'value').subscribe(this.handleChangeFromViewModel));

    $(this.element).material_select();
    $(this.element).on('change', this.handleChangeFromNativeSelect);
  };

  MdSelect.prototype.detached = function detached() {
    $(this.element).off('change', this.handleChangeFromNativeSelect);
    $(this.element).material_select('destroy');
    this.subscriptions.forEach(function (sub) {
      return sub.dispose();
    });
  };

  MdSelect.prototype.refresh = function refresh() {
    var _this8 = this;

    this.taskQueue.queueTask(function () {
      $(_this8.element).material_select('destroy');
      $(_this8.element).material_select();
    });
  };

  MdSelect.prototype.disabledChanged = function disabledChanged(newValue) {
    var $wrapper = $(this.element).parent('.select-wrapper');
    if ($wrapper.length > 0) {
      if (newValue) {
        $('.caret', $wrapper).addClass('disabled');
        $('input.select-dropdown', $wrapper).attr('disabled', 'disabled');
        $wrapper.attr('disabled', 'disabled');
      } else {
        $('.caret', $wrapper).removeClass('disabled');
        $('input.select-dropdown', $wrapper).attr('disabled', null);
        $wrapper.attr('disabled', null);
        $('.select-dropdown', $wrapper).dropdown({ 'hover': false, 'closeOnClick': false });
      }
    }
  };

  MdSelect.prototype.notifyBindingEngine = function notifyBindingEngine() {
    this.log.debug('selectedOptions changed', arguments);
  };

  MdSelect.prototype.handleChangeFromNativeSelect = function handleChangeFromNativeSelect() {
    if (!this._suspendUpdate) {
      this.log.debug('handleChangeFromNativeSelect', this.element.value, $(this.element).val());
      this._suspendUpdate = true;
      fireEvent(this.element, 'change');

      this._suspendUpdate = false;
    }
  };

  MdSelect.prototype.handleChangeFromViewModel = function handleChangeFromViewModel(newValue) {
    this.log.debug('handleChangeFromViewModel', newValue, $(this.element).val());
    if (!this._suspendUpdate) {
      $(this.element).material_select();
    }
  };

  return MdSelect;
}(), (_descriptor85 = _applyDecoratedDescriptor(_class93.prototype, 'disabled', [_dec156], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class93)) || _class92) || _class92);
var MdSidenavCollapse = exports.MdSidenavCollapse = (_dec157 = (0, _aureliaTemplating.customAttribute)('md-sidenav-collapse'), _dec158 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaBinding.ObserverLocator), _dec159 = (0, _aureliaTemplating.bindable)(), _dec157(_class95 = _dec158(_class95 = (_class96 = function () {
  function MdSidenavCollapse(element, observerLocator) {
    _classCallCheck(this, MdSidenavCollapse);

    _initDefineProp(this, 'ref', _descriptor86, this);

    this.element = element;
    this.observerLocator = observerLocator;
    this.log = (0, _aureliaLogging.getLogger)('md-sidenav-collapse');
  }

  MdSidenavCollapse.prototype.attached = function attached() {
    var _this9 = this;

    this.ref.whenAttached.then(function () {

      _this9.element.setAttribute('data-activates', _this9.ref.controlId);
      var sideNavConfig = {
        edge: _this9.ref.mdEdge || 'left',
        closeOnClick: _this9.ref.mdFixed ? false : getBooleanFromAttributeValue(_this9.ref.mdCloseOnClick),
        menuWidth: parseInt(_this9.ref.mdWidth, 10)
      };

      $(_this9.element).sideNav(sideNavConfig);
    });
  };

  MdSidenavCollapse.prototype.detached = function detached() {};

  return MdSidenavCollapse;
}(), (_descriptor86 = _applyDecoratedDescriptor(_class96.prototype, 'ref', [_dec159], {
  enumerable: true,
  initializer: null
})), _class96)) || _class95) || _class95);
var MdSidenav = exports.MdSidenav = (_dec160 = (0, _aureliaTemplating.customElement)('md-sidenav'), _dec161 = (0, _aureliaDependencyInjection.inject)(Element), _dec162 = (0, _aureliaTemplating.bindable)(), _dec163 = (0, _aureliaTemplating.bindable)(), _dec164 = (0, _aureliaTemplating.bindable)(), _dec165 = (0, _aureliaTemplating.bindable)(), _dec160(_class98 = _dec161(_class98 = (_class99 = (_temp6 = _class100 = function () {
  function MdSidenav(element) {
    var _this10 = this;

    _classCallCheck(this, MdSidenav);

    _initDefineProp(this, 'mdCloseOnClick', _descriptor87, this);

    _initDefineProp(this, 'mdEdge', _descriptor88, this);

    _initDefineProp(this, 'mdFixed', _descriptor89, this);

    _initDefineProp(this, 'mdWidth', _descriptor90, this);

    this.element = element;
    this.controlId = 'md-sidenav-' + MdSidenav.id++;
    this.log = (0, _aureliaLogging.getLogger)('md-sidenav');
    this.whenAttached = new Promise(function (resolve, reject) {
      _this10.attachedResolver = resolve;
    });
  }

  MdSidenav.prototype.attached = function attached() {
    this.attributeManager = new AttributeManager(this.sidenav);
    if (getBooleanFromAttributeValue(this.mdFixed)) {
      this.attributeManager.addClasses('fixed');
      if (this.mdEdge === 'right') {
        this.attributeManager.addClasses('right-aligned');
      }
    }

    this.attachedResolver();
  };

  MdSidenav.prototype.detached = function detached() {
    this.attributeManager.removeClasses(['fixed', 'right-aligned']);
  };

  MdSidenav.prototype.mdFixedChanged = function mdFixedChanged(newValue) {
    if (this.attributeManager) {
      if (getBooleanFromAttributeValue(newValue)) {
        this.attributeManager.addClasses('fixed');
      } else {
        this.attributeManager.removeClasses('fixed');
      }
    }
  };

  return MdSidenav;
}(), _class100.id = 0, _temp6), (_descriptor87 = _applyDecoratedDescriptor(_class99.prototype, 'mdCloseOnClick', [_dec162], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor88 = _applyDecoratedDescriptor(_class99.prototype, 'mdEdge', [_dec163], {
  enumerable: true,
  initializer: function initializer() {
    return 'left';
  }
}), _descriptor89 = _applyDecoratedDescriptor(_class99.prototype, 'mdFixed', [_dec164], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor90 = _applyDecoratedDescriptor(_class99.prototype, 'mdWidth', [_dec165], {
  enumerable: true,
  initializer: function initializer() {
    return 250;
  }
})), _class99)) || _class98) || _class98);
var MdSlider = exports.MdSlider = (_dec166 = (0, _aureliaTemplating.customElement)('md-slider'), _dec167 = (0, _aureliaDependencyInjection.inject)(Element), _dec168 = (0, _aureliaTemplating.inlineView)('\n  <template class="slider">\n  <require from="./slider.css"></require>\n  <ul class="slides">\n    <slot></slot>\n  </ul>\n  </template>\n'), _dec169 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec170 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec171 = (0, _aureliaTemplating.bindable)(), _dec172 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec173 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec166(_class101 = _dec167(_class101 = _dec168(_class101 = (_class102 = function () {
  function MdSlider(element) {
    _classCallCheck(this, MdSlider);

    _initDefineProp(this, 'mdFillContainer', _descriptor91, this);

    _initDefineProp(this, 'mdHeight', _descriptor92, this);

    _initDefineProp(this, 'mdIndicators', _descriptor93, this);

    _initDefineProp(this, 'mdInterval', _descriptor94, this);

    _initDefineProp(this, 'mdTransition', _descriptor95, this);

    this.element = element;
    this.log = (0, _aureliaLogging.getLogger)('md-slider');
  }

  MdSlider.prototype.attached = function attached() {
    if (getBooleanFromAttributeValue(this.mdFillContainer)) {
      this.element.classList.add('fullscreen');
    }
    this.refresh();
  };

  MdSlider.prototype.pause = function pause() {
    $(this.element).slider('pause');
  };

  MdSlider.prototype.start = function start() {
    $(this.element).slider('start');
  };

  MdSlider.prototype.next = function next() {
    $(this.element).slider('next');
  };

  MdSlider.prototype.prev = function prev() {
    $(this.element).slider('prev');
  };

  MdSlider.prototype.refresh = function refresh() {
    var options = {
      height: parseInt(this.mdHeight, 10),
      indicators: getBooleanFromAttributeValue(this.mdIndicators),
      interval: parseInt(this.mdInterval, 10),
      transition: parseInt(this.mdTransition, 10)
    };
    this.log.debug('refreshing slider, params:', options);
    $(this.element).slider(options);
  };

  MdSlider.prototype.mdIndicatorsChanged = function mdIndicatorsChanged() {
    this.refresh();
  };

  return MdSlider;
}(), (_descriptor91 = _applyDecoratedDescriptor(_class102.prototype, 'mdFillContainer', [_dec169], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor92 = _applyDecoratedDescriptor(_class102.prototype, 'mdHeight', [_dec170], {
  enumerable: true,
  initializer: function initializer() {
    return 400;
  }
}), _descriptor93 = _applyDecoratedDescriptor(_class102.prototype, 'mdIndicators', [_dec171], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor94 = _applyDecoratedDescriptor(_class102.prototype, 'mdInterval', [_dec172], {
  enumerable: true,
  initializer: function initializer() {
    return 6000;
  }
}), _descriptor95 = _applyDecoratedDescriptor(_class102.prototype, 'mdTransition', [_dec173], {
  enumerable: true,
  initializer: function initializer() {
    return 500;
  }
})), _class102)) || _class101) || _class101) || _class101);
var MdSwitch = exports.MdSwitch = (_dec174 = (0, _aureliaTemplating.customElement)('md-switch'), _dec175 = (0, _aureliaDependencyInjection.inject)(Element), _dec176 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec177 = (0, _aureliaTemplating.bindable)(), _dec178 = (0, _aureliaTemplating.bindable)(), _dec179 = (0, _aureliaTemplating.bindable)(), _dec174(_class104 = _dec175(_class104 = (_class105 = function () {
  function MdSwitch(element) {
    _classCallCheck(this, MdSwitch);

    _initDefineProp(this, 'mdChecked', _descriptor96, this);

    _initDefineProp(this, 'mdDisabled', _descriptor97, this);

    _initDefineProp(this, 'mdLabelOff', _descriptor98, this);

    _initDefineProp(this, 'mdLabelOn', _descriptor99, this);

    this.element = element;
    this.handleChange = this.handleChange.bind(this);
  }

  MdSwitch.prototype.attached = function attached() {
    this.checkbox.checked = getBooleanFromAttributeValue(this.mdChecked);
    if (getBooleanFromAttributeValue(this.mdDisabled)) {
      this.checkbox.disabled = true;
    }
    this.checkbox.addEventListener('change', this.handleChange);
  };

  MdSwitch.prototype.detached = function detached() {
    this.checkbox.removeEventListener('change', this.handleChange);
  };

  MdSwitch.prototype.handleChange = function handleChange() {
    this.mdChecked = this.checkbox.checked;
  };

  MdSwitch.prototype.mdCheckedChanged = function mdCheckedChanged(newValue) {
    if (this.checkbox) {
      this.checkbox.checked = !!newValue;
    }
  };

  return MdSwitch;
}(), (_descriptor96 = _applyDecoratedDescriptor(_class105.prototype, 'mdChecked', [_dec176], {
  enumerable: true,
  initializer: null
}), _descriptor97 = _applyDecoratedDescriptor(_class105.prototype, 'mdDisabled', [_dec177], {
  enumerable: true,
  initializer: null
}), _descriptor98 = _applyDecoratedDescriptor(_class105.prototype, 'mdLabelOff', [_dec178], {
  enumerable: true,
  initializer: function initializer() {
    return 'Off';
  }
}), _descriptor99 = _applyDecoratedDescriptor(_class105.prototype, 'mdLabelOn', [_dec179], {
  enumerable: true,
  initializer: function initializer() {
    return 'On';
  }
})), _class105)) || _class104) || _class104);
var MdTabs = exports.MdTabs = (_dec180 = (0, _aureliaTemplating.customAttribute)('md-tabs'), _dec181 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaTaskQueue.TaskQueue), _dec180(_class107 = _dec181(_class107 = function () {
  function MdTabs(element, taskQueue) {
    _classCallCheck(this, MdTabs);

    this.element = element;
    this.taskQueue = taskQueue;
    this.fireTabSelectedEvent = this.fireTabSelectedEvent.bind(this);
    this.attributeManager = new AttributeManager(this.element);
    this.tabAttributeManagers = [];
  }

  MdTabs.prototype.attached = function attached() {
    var _this11 = this;

    this.attributeManager.addClasses('tabs');

    var children = this.element.querySelectorAll('li');
    [].forEach.call(children, function (child) {
      var setter = new AttributeManager(child);
      setter.addClasses(['tab', 'primary-text']);
      _this11.tabAttributeManagers.push(setter);
    });

    $(this.element).tabs();
    var childAnchors = this.element.querySelectorAll('li a');
    [].forEach.call(childAnchors, function (a) {
      a.addEventListener('click', _this11.fireTabSelectedEvent);
    });
  };

  MdTabs.prototype.detached = function detached() {
    var _this12 = this;

    this.attributeManager.removeClasses('tabs');

    this.tabAttributeManagers.forEach(function (setter) {
      setter.removeClasses('tab');
    });
    this.tabAttributeManagers = [];
    var childAnchors = this.element.querySelectorAll('li a');
    [].forEach.call(childAnchors, function (a) {
      a.removeEventListener('click', _this12.fireTabSelectedEvent);
    });
  };

  MdTabs.prototype.fireTabSelectedEvent = function fireTabSelectedEvent(e) {
    var href = e.target.getAttribute('href');
    fireMaterializeEvent(this.element, 'selected', href);
  };

  MdTabs.prototype.selectTab = function selectTab(id) {
    $(this.element).tabs('select_tab', id);
    this.fireTabSelectedEvent({
      target: { getAttribute: function getAttribute() {
          return '#' + id;
        } }
    });
  };

  _createClass(MdTabs, [{
    key: 'selectedTab',
    get: function get() {
      var children = this.element.querySelectorAll('li.tab a');
      var index = -1;
      var href = null;
      [].forEach.call(children, function (a, i) {
        if (a.classList.contains('active')) {
          index = i;
          href = a.href;
          return;
        }
      });
      return { href: href, index: index };
    }
  }]);

  return MdTabs;
}()) || _class107) || _class107);

var MdToastService = exports.MdToastService = function () {
  function MdToastService() {
    _classCallCheck(this, MdToastService);
  }

  MdToastService.prototype.show = function show(message, displayLength, className) {
    return new Promise(function (resolve, reject) {
      Materialize.toast(message, displayLength, className, function () {
        resolve();
      });
    });
  };

  return MdToastService;
}();

var MdTooltip = exports.MdTooltip = (_dec182 = (0, _aureliaDependencyInjection.inject)(Element), _dec183 = (0, _aureliaTemplating.bindable)(), _dec184 = (0, _aureliaTemplating.bindable)(), _dec185 = (0, _aureliaTemplating.bindable)(), _dec182(_class108 = (_class109 = function () {
  function MdTooltip(element) {
    _classCallCheck(this, MdTooltip);

    _initDefineProp(this, 'position', _descriptor100, this);

    _initDefineProp(this, 'delay', _descriptor101, this);

    _initDefineProp(this, 'text', _descriptor102, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdTooltip.prototype.attached = function attached() {
    this.attributeManager.addClasses('tooltipped');
    this.attributeManager.addAttributes({ 'data-position': this.position, 'data-tooltip': this.text });
    $(this.element).tooltip({ delay: parseInt(this.delay, 10) });
  };

  MdTooltip.prototype.detached = function detached() {
    $(this.element).tooltip('remove');
    this.attributeManager.removeClasses('tooltipped');
    this.attributeManager.removeAttributes(['data-position', 'data-tooltip']);
  };

  return MdTooltip;
}(), (_descriptor100 = _applyDecoratedDescriptor(_class109.prototype, 'position', [_dec183], {
  enumerable: true,
  initializer: function initializer() {
    return 'bottom';
  }
}), _descriptor101 = _applyDecoratedDescriptor(_class109.prototype, 'delay', [_dec184], {
  enumerable: true,
  initializer: function initializer() {
    return 50;
  }
}), _descriptor102 = _applyDecoratedDescriptor(_class109.prototype, 'text', [_dec185], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
})), _class109)) || _class108);
var MdFadeinImage = exports.MdFadeinImage = (_dec186 = (0, _aureliaTemplating.customAttribute)('md-fadein-image'), _dec187 = (0, _aureliaDependencyInjection.inject)(Element), _dec188 = (0, _aureliaTemplating.bindable)(), _dec186(_class111 = _dec187(_class111 = (_class112 = function () {
  function MdFadeinImage(element) {
    _classCallCheck(this, MdFadeinImage);

    _initDefineProp(this, 'ref', _descriptor103, this);

    this.element = element;
    this.fadeInImage = this.fadeInImage.bind(this);
    this.log = (0, _aureliaLogging.getLogger)('md-fadein-image');
  }

  MdFadeinImage.prototype.attached = function attached() {
    this.element.addEventListener('click', this.fadeInImage);
    this.ensureOpacity();
  };

  MdFadeinImage.prototype.detached = function detached() {
    this.element.removeEventListener('click', this.fadeInImage);
  };

  MdFadeinImage.prototype.fadeInImage = function fadeInImage() {
    Materialize.fadeInImage(this.ref);
  };

  MdFadeinImage.prototype.ensureOpacity = function ensureOpacity() {
    var opacity = window.getComputedStyle(this.ref).opacity;
    if (opacity !== 0) {
      this.ref.style.opacity = 0;
    }
  };

  return MdFadeinImage;
}(), (_descriptor103 = _applyDecoratedDescriptor(_class112.prototype, 'ref', [_dec188], {
  enumerable: true,
  initializer: null
})), _class112)) || _class111) || _class111);
var MdStaggeredList = exports.MdStaggeredList = (_dec189 = (0, _aureliaTemplating.customAttribute)('md-staggered-list'), _dec190 = (0, _aureliaDependencyInjection.inject)(Element), _dec191 = (0, _aureliaTemplating.bindable)(), _dec189(_class114 = _dec190(_class114 = (_class115 = function () {
  function MdStaggeredList(element) {
    _classCallCheck(this, MdStaggeredList);

    _initDefineProp(this, 'ref', _descriptor104, this);

    this.element = element;
    this.staggerList = this.staggerList.bind(this);
    this.log = (0, _aureliaLogging.getLogger)('md-staggered-list');
  }

  MdStaggeredList.prototype.attached = function attached() {
    this.element.addEventListener('click', this.staggerList);
    this.ensureOpacity();
  };

  MdStaggeredList.prototype.detached = function detached() {
    this.element.removeEventListener('click', this.staggerList);
  };

  MdStaggeredList.prototype.staggerList = function staggerList() {
    Materialize.showStaggeredList(this.ref);
  };

  MdStaggeredList.prototype.ensureOpacity = function ensureOpacity() {
    var items = this.ref.querySelectorAll('li');
    [].forEach.call(items, function (item) {
      var opacity = window.getComputedStyle(item).opacity;
      if (opacity !== 0) {
        item.style.opacity = 0;
      }
    });
  };

  return MdStaggeredList;
}(), (_descriptor104 = _applyDecoratedDescriptor(_class115.prototype, 'ref', [_dec191], {
  enumerable: true,
  initializer: null
})), _class115)) || _class114) || _class114);
var MdWaves = exports.MdWaves = (_dec192 = (0, _aureliaTemplating.customAttribute)('md-waves'), _dec193 = (0, _aureliaDependencyInjection.inject)(Element), _dec194 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec195 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec196 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec192(_class117 = _dec193(_class117 = (_class118 = function () {
  function MdWaves(element) {
    _classCallCheck(this, MdWaves);

    _initDefineProp(this, 'block', _descriptor105, this);

    _initDefineProp(this, 'circle', _descriptor106, this);

    _initDefineProp(this, 'color', _descriptor107, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdWaves.prototype.attached = function attached() {
    var classes = ['waves-effect'];
    if (getBooleanFromAttributeValue(this.block)) {
      classes.push('waves-block');
    }
    if (getBooleanFromAttributeValue(this.circle)) {
      classes.push('waves-circle');
    }
    if (this.color) {
      classes.push('waves-' + this.color);
    }

    this.attributeManager.addClasses(classes);
    Waves.attach(this.element);
  };

  MdWaves.prototype.detached = function detached() {
    var classes = ['waves-effect', 'waves-block'];
    if (this.color) {
      classes.push('waves-' + this.color);
    }

    this.attributeManager.removeClasses(classes);
  };

  return MdWaves;
}(), (_descriptor105 = _applyDecoratedDescriptor(_class118.prototype, 'block', [_dec194], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor106 = _applyDecoratedDescriptor(_class118.prototype, 'circle', [_dec195], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor107 = _applyDecoratedDescriptor(_class118.prototype, 'color', [_dec196], {
  enumerable: true,
  initializer: null
})), _class118)) || _class117) || _class117);