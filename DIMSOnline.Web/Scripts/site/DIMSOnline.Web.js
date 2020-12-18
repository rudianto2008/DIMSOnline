var DIMSOnline;
(function (DIMSOnline) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = DIMSOnline.Administration || (DIMSOnline.Administration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = DIMSOnline.Administration || (DIMSOnline.Administration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = DIMSOnline.Administration || (DIMSOnline.Administration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Administration;
    (function (Administration) {
    })(Administration = DIMSOnline.Administration || (DIMSOnline.Administration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = DIMSOnline.Administration || (DIMSOnline.Administration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = DIMSOnline.Administration || (DIMSOnline.Administration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = DIMSOnline.Administration || (DIMSOnline.Administration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = DIMSOnline.Administration || (DIMSOnline.Administration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = DIMSOnline.Administration || (DIMSOnline.Administration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = DIMSOnline.Administration || (DIMSOnline.Administration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = DIMSOnline.Administration || (DIMSOnline.Administration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:Security';
            UserPermissionRow.insertPermission = 'Administration:Security';
            UserPermissionRow.readPermission = 'Administration:Security';
            UserPermissionRow.updatePermission = 'Administration:Security';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = DIMSOnline.Administration || (DIMSOnline.Administration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = DIMSOnline.Administration || (DIMSOnline.Administration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = DIMSOnline.Administration || (DIMSOnline.Administration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = DIMSOnline.Administration || (DIMSOnline.Administration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Administration:Security';
            UserRow.insertPermission = 'Administration:Security';
            UserRow.readPermission = 'Administration:Security';
            UserRow.updatePermission = 'Administration:Security';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = DIMSOnline.Administration || (DIMSOnline.Administration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = DIMSOnline.Administration || (DIMSOnline.Administration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            UserPreferenceRow.deletePermission = '';
            UserPreferenceRow.insertPermission = '';
            UserPreferenceRow.readPermission = '';
            UserPreferenceRow.updatePermission = '';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = DIMSOnline.Common || (DIMSOnline.Common = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = DIMSOnline.Common || (DIMSOnline.Common = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var BinLocationForm = /** @class */ (function (_super) {
            __extends(BinLocationForm, _super);
            function BinLocationForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BinLocationForm.init) {
                    BinLocationForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(BinLocationForm, [
                        'BinLocation', w0
                    ]);
                }
                return _this;
            }
            BinLocationForm.formKey = 'Configuration.BinLocation';
            return BinLocationForm;
        }(Serenity.PrefixedContext));
        Configuration.BinLocationForm = BinLocationForm;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var BinLocationRow;
        (function (BinLocationRow) {
            BinLocationRow.idProperty = 'BinLocationId';
            BinLocationRow.nameProperty = 'BinLocation';
            BinLocationRow.localTextPrefix = 'Configuration.BinLocation';
            BinLocationRow.deletePermission = 'Administration:Configuration';
            BinLocationRow.insertPermission = 'Administration:Configuration';
            BinLocationRow.readPermission = 'Administration:Configuration';
            BinLocationRow.updatePermission = 'Administration:Configuration';
        })(BinLocationRow = Configuration.BinLocationRow || (Configuration.BinLocationRow = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var BinLocationService;
        (function (BinLocationService) {
            BinLocationService.baseUrl = 'Configuration/BinLocation';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BinLocationService[x] = function (r, s, o) {
                    return Q.serviceRequest(BinLocationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BinLocationService = Configuration.BinLocationService || (Configuration.BinLocationService = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var CategoryUnitForm = /** @class */ (function (_super) {
            __extends(CategoryUnitForm, _super);
            function CategoryUnitForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CategoryUnitForm.init) {
                    CategoryUnitForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(CategoryUnitForm, [
                        'CategoryUnitName', w0,
                        'PricePerHour', w1
                    ]);
                }
                return _this;
            }
            CategoryUnitForm.formKey = 'Configuration.CategoryUnit';
            return CategoryUnitForm;
        }(Serenity.PrefixedContext));
        Configuration.CategoryUnitForm = CategoryUnitForm;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var CategoryUnitRow;
        (function (CategoryUnitRow) {
            CategoryUnitRow.idProperty = 'CategoryUnitId';
            CategoryUnitRow.nameProperty = 'CategoryUnitName';
            CategoryUnitRow.localTextPrefix = 'Configuration.CategoryUnit';
            CategoryUnitRow.deletePermission = 'Administration:Configuration';
            CategoryUnitRow.insertPermission = 'Administration:Configuration';
            CategoryUnitRow.readPermission = 'Administration:Configuration';
            CategoryUnitRow.updatePermission = 'Administration:Configuration';
        })(CategoryUnitRow = Configuration.CategoryUnitRow || (Configuration.CategoryUnitRow = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var CategoryUnitService;
        (function (CategoryUnitService) {
            CategoryUnitService.baseUrl = 'Configuration/CategoryUnit';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CategoryUnitService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoryUnitService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoryUnitService = Configuration.CategoryUnitService || (Configuration.CategoryUnitService = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var CityForm = /** @class */ (function (_super) {
            __extends(CityForm, _super);
            function CityForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CityForm.init) {
                    CityForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(CityForm, [
                        'IslandId', w0,
                        'ProvinceId', w0,
                        'CityCode', w1,
                        'CityName', w1
                    ]);
                }
                return _this;
            }
            CityForm.formKey = 'Configuration.City';
            return CityForm;
        }(Serenity.PrefixedContext));
        Configuration.CityForm = CityForm;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var CityRow;
        (function (CityRow) {
            CityRow.idProperty = 'CityId';
            CityRow.nameProperty = 'CityName';
            CityRow.localTextPrefix = 'Configuration.City';
            CityRow.lookupKey = 'LookupCity';
            function getLookup() {
                return Q.getLookup('LookupCity');
            }
            CityRow.getLookup = getLookup;
            CityRow.deletePermission = 'Administration:Configuration';
            CityRow.insertPermission = 'Administration:Configuration';
            CityRow.readPermission = 'Administration:Configuration';
            CityRow.updatePermission = 'Administration:Configuration';
        })(CityRow = Configuration.CityRow || (Configuration.CityRow = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var CityService;
        (function (CityService) {
            CityService.baseUrl = 'Configuration/City';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CityService[x] = function (r, s, o) {
                    return Q.serviceRequest(CityService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CityService = Configuration.CityService || (Configuration.CityService = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var CompanyForm = /** @class */ (function (_super) {
            __extends(CompanyForm, _super);
            function CompanyForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CompanyForm.init) {
                    CompanyForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.LookupEditor;
                    var w3 = s.ImageUploadEditor;
                    Q.initFormType(CompanyForm, [
                        'CompanyName', w0,
                        'Address', w1,
                        'ProvinceId', w2,
                        'CityId', w2,
                        'Phone', w0,
                        'ContactPerson', w0,
                        'Logo', w3
                    ]);
                }
                return _this;
            }
            CompanyForm.formKey = 'Configuration.Company';
            return CompanyForm;
        }(Serenity.PrefixedContext));
        Configuration.CompanyForm = CompanyForm;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var CompanyRow;
        (function (CompanyRow) {
            CompanyRow.idProperty = 'CompanyId';
            CompanyRow.nameProperty = 'CompanyName';
            CompanyRow.localTextPrefix = 'Configuration.Company';
            CompanyRow.deletePermission = 'Administration:Configuration';
            CompanyRow.insertPermission = 'Administration:Configuration';
            CompanyRow.readPermission = 'Administration:Configuration';
            CompanyRow.updatePermission = 'Administration:Configuration';
        })(CompanyRow = Configuration.CompanyRow || (Configuration.CompanyRow = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var CompanyService;
        (function (CompanyService) {
            CompanyService.baseUrl = 'Configuration/Company';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CompanyService[x] = function (r, s, o) {
                    return Q.serviceRequest(CompanyService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CompanyService = Configuration.CompanyService || (Configuration.CompanyService = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var CustomerForm = /** @class */ (function (_super) {
            __extends(CustomerForm, _super);
            function CustomerForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CustomerForm.init) {
                    CustomerForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.LookupEditor;
                    var w3 = s.IntegerEditor;
                    Q.initFormType(CustomerForm, [
                        'CustomerNumber', w0,
                        'CustomerName', w0,
                        'BirthPlace', w0,
                        'BirthDate', w1,
                        'Npwp', w0,
                        'ContactPerson', w0,
                        'Phone', w0,
                        'Email', w0,
                        'ProvinceId', w2,
                        'CityId', w2,
                        'Address', w0,
                        'PostCode', w3
                    ]);
                }
                return _this;
            }
            CustomerForm.formKey = 'Configuration.Customer';
            return CustomerForm;
        }(Serenity.PrefixedContext));
        Configuration.CustomerForm = CustomerForm;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var CustomerRow;
        (function (CustomerRow) {
            CustomerRow.idProperty = 'CustomerId';
            CustomerRow.nameProperty = 'CustomerNumber';
            CustomerRow.localTextPrefix = 'Configuration.Customer';
            CustomerRow.deletePermission = 'Administration:Configuration';
            CustomerRow.insertPermission = 'Administration:Configuration';
            CustomerRow.readPermission = 'Administration:Configuration';
            CustomerRow.updatePermission = 'Administration:Configuration';
        })(CustomerRow = Configuration.CustomerRow || (Configuration.CustomerRow = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var CustomerService;
        (function (CustomerService) {
            CustomerService.baseUrl = 'Configuration/Customer';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomerService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomerService = Configuration.CustomerService || (Configuration.CustomerService = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var IslandForm = /** @class */ (function (_super) {
            __extends(IslandForm, _super);
            function IslandForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!IslandForm.init) {
                    IslandForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(IslandForm, [
                        'IslandCode', w0,
                        'IslandName', w0,
                        'InsertUserId', w1,
                        'InsertDate', w2,
                        'UpdateUserId', w1,
                        'UpdateDate', w2,
                        'IsActive', w1
                    ]);
                }
                return _this;
            }
            IslandForm.formKey = 'Configuration.Island';
            return IslandForm;
        }(Serenity.PrefixedContext));
        Configuration.IslandForm = IslandForm;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var IslandRow;
        (function (IslandRow) {
            IslandRow.idProperty = 'IslandId';
            IslandRow.nameProperty = 'IslandName';
            IslandRow.localTextPrefix = 'Configuration.Island';
            IslandRow.lookupKey = 'LookupIsland';
            function getLookup() {
                return Q.getLookup('LookupIsland');
            }
            IslandRow.getLookup = getLookup;
            IslandRow.deletePermission = 'Administration:Configuration';
            IslandRow.insertPermission = 'Administration:Configuration';
            IslandRow.readPermission = 'Administration:Configuration';
            IslandRow.updatePermission = 'Administration:Configuration';
        })(IslandRow = Configuration.IslandRow || (Configuration.IslandRow = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var IslandService;
        (function (IslandService) {
            IslandService.baseUrl = 'Configuration/Island';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                IslandService[x] = function (r, s, o) {
                    return Q.serviceRequest(IslandService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(IslandService = Configuration.IslandService || (Configuration.IslandService = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var MovementTypeForm = /** @class */ (function (_super) {
            __extends(MovementTypeForm, _super);
            function MovementTypeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MovementTypeForm.init) {
                    MovementTypeForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(MovementTypeForm, [
                        'MovementTypeName', w0,
                        'StatusInOut', w0
                    ]);
                }
                return _this;
            }
            MovementTypeForm.formKey = 'Configuration.MovementType';
            return MovementTypeForm;
        }(Serenity.PrefixedContext));
        Configuration.MovementTypeForm = MovementTypeForm;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var MovementTypeRow;
        (function (MovementTypeRow) {
            MovementTypeRow.idProperty = 'MovementTypeId';
            MovementTypeRow.nameProperty = 'MovementTypeName';
            MovementTypeRow.localTextPrefix = 'Configuration.MovementType';
            MovementTypeRow.deletePermission = 'Administration:Configuration';
            MovementTypeRow.insertPermission = 'Administration:Configuration';
            MovementTypeRow.readPermission = 'Administration:Configuration';
            MovementTypeRow.updatePermission = 'Administration:Configuration';
        })(MovementTypeRow = Configuration.MovementTypeRow || (Configuration.MovementTypeRow = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var MovementTypeService;
        (function (MovementTypeService) {
            MovementTypeService.baseUrl = 'Configuration/MovementType';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MovementTypeService[x] = function (r, s, o) {
                    return Q.serviceRequest(MovementTypeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MovementTypeService = Configuration.MovementTypeService || (Configuration.MovementTypeService = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var OrderCategoryForm = /** @class */ (function (_super) {
            __extends(OrderCategoryForm, _super);
            function OrderCategoryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OrderCategoryForm.init) {
                    OrderCategoryForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(OrderCategoryForm, [
                        'OrderCategoryName', w0,
                        'Description', w0
                    ]);
                }
                return _this;
            }
            OrderCategoryForm.formKey = 'Configuration.OrderCategory';
            return OrderCategoryForm;
        }(Serenity.PrefixedContext));
        Configuration.OrderCategoryForm = OrderCategoryForm;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var OrderCategoryRow;
        (function (OrderCategoryRow) {
            OrderCategoryRow.idProperty = 'OrderCategoryId';
            OrderCategoryRow.nameProperty = 'OrderCategoryName';
            OrderCategoryRow.localTextPrefix = 'Configuration.OrderCategory';
            OrderCategoryRow.deletePermission = 'Administration:Configuration';
            OrderCategoryRow.insertPermission = 'Administration:Configuration';
            OrderCategoryRow.readPermission = 'Administration:Configuration';
            OrderCategoryRow.updatePermission = 'Administration:Configuration';
        })(OrderCategoryRow = Configuration.OrderCategoryRow || (Configuration.OrderCategoryRow = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var OrderCategoryService;
        (function (OrderCategoryService) {
            OrderCategoryService.baseUrl = 'Configuration/OrderCategory';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OrderCategoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(OrderCategoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OrderCategoryService = Configuration.OrderCategoryService || (Configuration.OrderCategoryService = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration_1) {
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProductAlternativeForm = /** @class */ (function (_super) {
            __extends(ProductAlternativeForm, _super);
            function ProductAlternativeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductAlternativeForm.init) {
                    ProductAlternativeForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.BooleanEditor;
                    Q.initFormType(ProductAlternativeForm, [
                        'ProductId', w0,
                        'ProductIdAlt', w0,
                        'SeqNo', w0,
                        'Combine', w1
                    ]);
                }
                return _this;
            }
            ProductAlternativeForm.formKey = 'Configuration.ProductAlternative';
            return ProductAlternativeForm;
        }(Serenity.PrefixedContext));
        Configuration.ProductAlternativeForm = ProductAlternativeForm;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProductAlternativeRow;
        (function (ProductAlternativeRow) {
            ProductAlternativeRow.idProperty = 'ProductAlternativeId';
            ProductAlternativeRow.localTextPrefix = 'Configuration.ProductAlternative';
            ProductAlternativeRow.deletePermission = 'Administration:Configuration';
            ProductAlternativeRow.insertPermission = 'Administration:Configuration';
            ProductAlternativeRow.readPermission = 'Administration:Configuration';
            ProductAlternativeRow.updatePermission = 'Administration:Configuration';
        })(ProductAlternativeRow = Configuration.ProductAlternativeRow || (Configuration.ProductAlternativeRow = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProductAlternativeService;
        (function (ProductAlternativeService) {
            ProductAlternativeService.baseUrl = 'Configuration/ProductAlternative';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductAlternativeService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductAlternativeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductAlternativeService = Configuration.ProductAlternativeService || (Configuration.ProductAlternativeService = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProductBasePriceForm = /** @class */ (function (_super) {
            __extends(ProductBasePriceForm, _super);
            function ProductBasePriceForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductBasePriceForm.init) {
                    ProductBasePriceForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(ProductBasePriceForm, [
                        'ProductBasePriceNumber', w0,
                        'ProductId', w1,
                        'Price', w2,
                        'ActualPrice', w2,
                        'Continued', w3
                    ]);
                }
                return _this;
            }
            ProductBasePriceForm.formKey = 'Configuration.ProductBasePrice';
            return ProductBasePriceForm;
        }(Serenity.PrefixedContext));
        Configuration.ProductBasePriceForm = ProductBasePriceForm;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProductBasePriceRow;
        (function (ProductBasePriceRow) {
            ProductBasePriceRow.idProperty = 'ProductBasePriceId';
            ProductBasePriceRow.nameProperty = 'ProductBasePriceNumber';
            ProductBasePriceRow.localTextPrefix = 'Configuration.ProductBasePrice';
            ProductBasePriceRow.deletePermission = 'Administration:Configuration';
            ProductBasePriceRow.insertPermission = 'Administration:Configuration';
            ProductBasePriceRow.readPermission = 'Administration:Configuration';
            ProductBasePriceRow.updatePermission = 'Administration:Configuration';
        })(ProductBasePriceRow = Configuration.ProductBasePriceRow || (Configuration.ProductBasePriceRow = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProductBasePriceService;
        (function (ProductBasePriceService) {
            ProductBasePriceService.baseUrl = 'Configuration/ProductBasePrice';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductBasePriceService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductBasePriceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductBasePriceService = Configuration.ProductBasePriceService || (Configuration.ProductBasePriceService = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProductPriceForm = /** @class */ (function (_super) {
            __extends(ProductPriceForm, _super);
            function ProductPriceForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductPriceForm.init) {
                    ProductPriceForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(ProductPriceForm, [
                        'ProductPriceNumber', w0,
                        'ProductId', w1,
                        'OrderCategoryId', w1,
                        'Price', w2,
                        'Continued', w3
                    ]);
                }
                return _this;
            }
            ProductPriceForm.formKey = 'Configuration.ProductPrice';
            return ProductPriceForm;
        }(Serenity.PrefixedContext));
        Configuration.ProductPriceForm = ProductPriceForm;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProductPriceRow;
        (function (ProductPriceRow) {
            ProductPriceRow.idProperty = 'ProductPriceId';
            ProductPriceRow.nameProperty = 'ProductPriceNumber';
            ProductPriceRow.localTextPrefix = 'Configuration.ProductPrice';
            ProductPriceRow.deletePermission = 'Administration:Configuration';
            ProductPriceRow.insertPermission = 'Administration:Configuration';
            ProductPriceRow.readPermission = 'Administration:Configuration';
            ProductPriceRow.updatePermission = 'Administration:Configuration';
        })(ProductPriceRow = Configuration.ProductPriceRow || (Configuration.ProductPriceRow = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProductPriceService;
        (function (ProductPriceService) {
            ProductPriceService.baseUrl = 'Configuration/ProductPrice';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductPriceService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductPriceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductPriceService = Configuration.ProductPriceService || (Configuration.ProductPriceService = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProductTypeForm = /** @class */ (function (_super) {
            __extends(ProductTypeForm, _super);
            function ProductTypeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductTypeForm.init) {
                    ProductTypeForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(ProductTypeForm, [
                        'ProductTypeName', w0
                    ]);
                }
                return _this;
            }
            ProductTypeForm.formKey = 'Configuration.ProductType';
            return ProductTypeForm;
        }(Serenity.PrefixedContext));
        Configuration.ProductTypeForm = ProductTypeForm;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProductTypeRow;
        (function (ProductTypeRow) {
            ProductTypeRow.idProperty = 'ProductTypeId';
            ProductTypeRow.nameProperty = 'ProductTypeName';
            ProductTypeRow.localTextPrefix = 'Configuration.ProductType';
            ProductTypeRow.deletePermission = 'Administration:Configuration';
            ProductTypeRow.insertPermission = 'Administration:Configuration';
            ProductTypeRow.readPermission = 'Administration:Configuration';
            ProductTypeRow.updatePermission = 'Administration:Configuration';
        })(ProductTypeRow = Configuration.ProductTypeRow || (Configuration.ProductTypeRow = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProductTypeService;
        (function (ProductTypeService) {
            ProductTypeService.baseUrl = 'Configuration/ProductType';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductTypeService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductTypeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductTypeService = Configuration.ProductTypeService || (Configuration.ProductTypeService = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProductsForm = /** @class */ (function (_super) {
            __extends(ProductsForm, _super);
            function ProductsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductsForm.init) {
                    ProductsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.BooleanEditor;
                    Q.initFormType(ProductsForm, [
                        'ProductNumber', w0,
                        'ModelName', w0,
                        'CategoryUnitId', w1,
                        'UnitStockId', w1,
                        'PartNumber', w0,
                        'ProductTypeId', w1,
                        'MinimumStock', w1,
                        'Continued', w2,
                        'ProductImage', w0,
                        'Description', w0,
                        'BinLocationId', w1,
                        'StockQuantity', w1
                    ]);
                }
                return _this;
            }
            ProductsForm.formKey = 'Configuration.Products';
            return ProductsForm;
        }(Serenity.PrefixedContext));
        Configuration.ProductsForm = ProductsForm;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProductsLogForm = /** @class */ (function (_super) {
            __extends(ProductsLogForm, _super);
            function ProductsLogForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductsLogForm.init) {
                    ProductsLogForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(ProductsLogForm, [
                        'ProductId', w0,
                        'ModelName', w1,
                        'UnitStock', w1,
                        'PartNumber', w1,
                        'ProductTypeId', w0,
                        'Continued', w2,
                        'ProductImage', w1,
                        'Description', w1,
                        'BinLocation', w1,
                        'OperationType', w0,
                        'ChangingUserId', w0,
                        'ValidFrom', w3,
                        'ValidUntil', w3
                    ]);
                }
                return _this;
            }
            ProductsLogForm.formKey = 'Configuration.ProductsLog';
            return ProductsLogForm;
        }(Serenity.PrefixedContext));
        Configuration.ProductsLogForm = ProductsLogForm;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProductsLogRow;
        (function (ProductsLogRow) {
            ProductsLogRow.idProperty = 'ProductLogId';
            ProductsLogRow.nameProperty = 'ModelName';
            ProductsLogRow.localTextPrefix = 'Configuration.ProductsLog';
            ProductsLogRow.deletePermission = 'Administration:Configuration';
            ProductsLogRow.insertPermission = 'Administration:Configuration';
            ProductsLogRow.readPermission = 'Administration:Configuration';
            ProductsLogRow.updatePermission = 'Administration:Configuration';
        })(ProductsLogRow = Configuration.ProductsLogRow || (Configuration.ProductsLogRow = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProductsLogService;
        (function (ProductsLogService) {
            ProductsLogService.baseUrl = 'Configuration/ProductsLog';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductsLogService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductsLogService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductsLogService = Configuration.ProductsLogService || (Configuration.ProductsLogService = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProductsRow;
        (function (ProductsRow) {
            ProductsRow.idProperty = 'ProductId';
            ProductsRow.nameProperty = 'ProductNumber';
            ProductsRow.localTextPrefix = 'Configuration.Products';
            ProductsRow.deletePermission = 'Administration:Configuration';
            ProductsRow.insertPermission = 'Administration:Configuration';
            ProductsRow.readPermission = 'Administration:Configuration';
            ProductsRow.updatePermission = 'Administration:Configuration';
        })(ProductsRow = Configuration.ProductsRow || (Configuration.ProductsRow = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProductsService;
        (function (ProductsService) {
            ProductsService.baseUrl = 'Configuration/Products';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductsService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductsService = Configuration.ProductsService || (Configuration.ProductsService = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProvinceForm = /** @class */ (function (_super) {
            __extends(ProvinceForm, _super);
            function ProvinceForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProvinceForm.init) {
                    ProvinceForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(ProvinceForm, [
                        'ProvinceCode', w0,
                        'IslandId', w1,
                        'ProvinceName', w0,
                        'InsertUserId', w1,
                        'InsertDate', w2,
                        'UpdateUserId', w1,
                        'UpdateDate', w2,
                        'IsActive', w1
                    ]);
                }
                return _this;
            }
            ProvinceForm.formKey = 'Configuration.Province';
            return ProvinceForm;
        }(Serenity.PrefixedContext));
        Configuration.ProvinceForm = ProvinceForm;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProvinceRow;
        (function (ProvinceRow) {
            ProvinceRow.idProperty = 'ProvinceId';
            ProvinceRow.nameProperty = 'ProvinceName';
            ProvinceRow.localTextPrefix = 'Configuration.Province';
            ProvinceRow.lookupKey = 'LookupProvince';
            function getLookup() {
                return Q.getLookup('LookupProvince');
            }
            ProvinceRow.getLookup = getLookup;
            ProvinceRow.deletePermission = 'Administration:Configuration';
            ProvinceRow.insertPermission = 'Administration:Configuration';
            ProvinceRow.readPermission = 'Administration:Configuration';
            ProvinceRow.updatePermission = 'Administration:Configuration';
        })(ProvinceRow = Configuration.ProvinceRow || (Configuration.ProvinceRow = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProvinceService;
        (function (ProvinceService) {
            ProvinceService.baseUrl = 'Configuration/Province';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProvinceService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProvinceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProvinceService = Configuration.ProvinceService || (Configuration.ProvinceService = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var SupplierForm = /** @class */ (function (_super) {
            __extends(SupplierForm, _super);
            function SupplierForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SupplierForm.init) {
                    SupplierForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(SupplierForm, [
                        'SupplierName', w0,
                        'Address', w0,
                        'Phone', w0,
                        'ContactName', w0,
                        'InsertUserId', w1,
                        'InsertDate', w2,
                        'UpdateUserId', w1,
                        'UpdateDate', w2,
                        'IsActive', w1
                    ]);
                }
                return _this;
            }
            SupplierForm.formKey = 'Configuration.Supplier';
            return SupplierForm;
        }(Serenity.PrefixedContext));
        Configuration.SupplierForm = SupplierForm;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var SupplierRow;
        (function (SupplierRow) {
            SupplierRow.idProperty = 'SupplierId';
            SupplierRow.nameProperty = 'SupplierName';
            SupplierRow.localTextPrefix = 'Configuration.Supplier';
            SupplierRow.deletePermission = 'Administration:Configuration';
            SupplierRow.insertPermission = 'Administration:Configuration';
            SupplierRow.readPermission = 'Administration:Configuration';
            SupplierRow.updatePermission = 'Administration:Configuration';
        })(SupplierRow = Configuration.SupplierRow || (Configuration.SupplierRow = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var SupplierService;
        (function (SupplierService) {
            SupplierService.baseUrl = 'Configuration/Supplier';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SupplierService[x] = function (r, s, o) {
                    return Q.serviceRequest(SupplierService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SupplierService = Configuration.SupplierService || (Configuration.SupplierService = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var UnitStockForm = /** @class */ (function (_super) {
            __extends(UnitStockForm, _super);
            function UnitStockForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UnitStockForm.init) {
                    UnitStockForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(UnitStockForm, [
                        'UnitStock', w0,
                        'InsertUserId', w1,
                        'InsertDate', w2,
                        'UpdateUserId', w1,
                        'UpdateDate', w2,
                        'IsActive', w1
                    ]);
                }
                return _this;
            }
            UnitStockForm.formKey = 'Configuration.UnitStock';
            return UnitStockForm;
        }(Serenity.PrefixedContext));
        Configuration.UnitStockForm = UnitStockForm;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var UnitStockRow;
        (function (UnitStockRow) {
            UnitStockRow.idProperty = 'UnitStockId';
            UnitStockRow.nameProperty = 'UnitStock';
            UnitStockRow.localTextPrefix = 'Configuration.UnitStock';
            UnitStockRow.deletePermission = 'Administration:Configuration';
            UnitStockRow.insertPermission = 'Administration:Configuration';
            UnitStockRow.readPermission = 'Administration:Configuration';
            UnitStockRow.updatePermission = 'Administration:Configuration';
        })(UnitStockRow = Configuration.UnitStockRow || (Configuration.UnitStockRow = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var UnitStockService;
        (function (UnitStockService) {
            UnitStockService.baseUrl = 'Configuration/UnitStock';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UnitStockService[x] = function (r, s, o) {
                    return Q.serviceRequest(UnitStockService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UnitStockService = Configuration.UnitStockService || (Configuration.UnitStockService = {}));
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = DIMSOnline.Membership || (DIMSOnline.Membership = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = DIMSOnline.Membership || (DIMSOnline.Membership = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = DIMSOnline.Membership || (DIMSOnline.Membership = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = DIMSOnline.Membership || (DIMSOnline.Membership = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = DIMSOnline.Membership || (DIMSOnline.Membership = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Texts;
    (function (Texts) {
        DIMSOnline['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Configuration: { BinLocation: { BinLocation: 1, BinLocationId: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, UpdateDate: 1, UpdateUserId: 1 }, CategoryUnit: { CategoryUnitId: 1, CategoryUnitName: 1, PricePerHour: 1 }, City: { CityCode: 1, CityId: 1, CityName: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, IslandId: 1, IslandIslandName: 1, ProvinceId: 1, ProvinceInsertDate: 1, ProvinceInsertUserId: 1, ProvinceIsActive: 1, ProvinceIslandId: 1, ProvinceProvinceCode: 1, ProvinceProvinceName: 1, ProvinceUpdateDate: 1, ProvinceUpdateUserId: 1, UpdateDate: 1, UpdateUserId: 1 }, Company: { Address: 1, CityCityCode: 1, CityCityName: 1, CityId: 1, CityInsertDate: 1, CityInsertUserId: 1, CityIsActive: 1, CityIslandId: 1, CityProvinceId: 1, CityUpdateDate: 1, CityUpdateUserId: 1, CompanyId: 1, CompanyName: 1, ContactPerson: 1, DeleteDate: 1, DeleteUserId: 1, Fax: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, IslandId: 1, IslandInsertDate: 1, IslandInsertUserId: 1, IslandIsActive: 1, IslandIslandCode: 1, IslandIslandName: 1, IslandUpdateDate: 1, IslandUpdateUserId: 1, Logo: 1, OfficeType: 1, Phone: 1, ProvinceId: 1, ProvinceInsertDate: 1, ProvinceInsertUserId: 1, ProvinceIsActive: 1, ProvinceIslandId: 1, ProvinceProvinceCode: 1, ProvinceProvinceName: 1, ProvinceUpdateDate: 1, ProvinceUpdateUserId: 1, UpdateDate: 1, UpdateUserId: 1 }, Customer: { Address: 1, BirthDate: 1, BirthPlace: 1, CityCityCode: 1, CityCityName: 1, CityId: 1, CityInsertDate: 1, CityInsertUserId: 1, CityIsActive: 1, CityIslandId: 1, CityProvinceId: 1, CityUpdateDate: 1, CityUpdateUserId: 1, CompanyAddress: 1, CompanyCityId: 1, CompanyCompanyName: 1, CompanyContactPerson: 1, CompanyDeleteDate: 1, CompanyDeleteUserId: 1, CompanyFax: 1, CompanyId: 1, CompanyInsertDate: 1, CompanyInsertUserId: 1, CompanyIsActive: 1, CompanyIslandId: 1, CompanyLogo: 1, CompanyOfficeType: 1, CompanyPhone: 1, CompanyProvinceId: 1, CompanyUpdateDate: 1, CompanyUpdateUserId: 1, ContactPerson: 1, CustomerId: 1, CustomerName: 1, CustomerNumber: 1, DeleteDate: 1, DeleteUserId: 1, Email: 1, Fax: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, IslandId: 1, IslandInsertDate: 1, IslandInsertUserId: 1, IslandIsActive: 1, IslandIslandCode: 1, IslandIslandName: 1, IslandUpdateDate: 1, IslandUpdateUserId: 1, Npwp: 1, Phone: 1, Pic: 1, PostCode: 1, ProvinceId: 1, ProvinceInsertDate: 1, ProvinceInsertUserId: 1, ProvinceIsActive: 1, ProvinceIslandId: 1, ProvinceProvinceCode: 1, ProvinceProvinceName: 1, ProvinceUpdateDate: 1, ProvinceUpdateUserId: 1, UpdateDate: 1, UpdateUserId: 1 }, Island: { InsertDate: 1, InsertUserId: 1, IsActive: 1, IslandCode: 1, IslandId: 1, IslandName: 1, UpdateDate: 1, UpdateUserId: 1 }, MovementType: { MovementTypeId: 1, MovementTypeName: 1, StatusInOut: 1 }, OrderCategory: { Description: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, OrderCategoryId: 1, OrderCategoryName: 1, UpdateDate: 1, UpdateUserId: 1 }, ProductAlternative: { Combine: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, ProductAlternativeId: 1, ProductBinLocationId: 1, ProductCategoryUnitId: 1, ProductContinued: 1, ProductDescription: 1, ProductId: 1, ProductIdAlt: 1, ProductInsertDate: 1, ProductInsertUserId: 1, ProductIsActive: 1, ProductMinimumStock: 1, ProductModelName: 1, ProductPartNumber: 1, ProductProductImage: 1, ProductProductNumber: 1, ProductProductTypeId: 1, ProductStockQuantity: 1, ProductUnitStockId: 1, ProductUpdateDate: 1, ProductUpdateUserId: 1, SeqNo: 1, UpdateDate: 1, UpdateUserId: 1 }, ProductBasePrice: { ActualPrice: 1, Continued: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Price: 1, ProductBasePriceId: 1, ProductBasePriceNumber: 1, ProductBinLocationId: 1, ProductCategoryUnitId: 1, ProductContinued: 1, ProductDescription: 1, ProductId: 1, ProductInsertDate: 1, ProductInsertUserId: 1, ProductIsActive: 1, ProductMinimumStock: 1, ProductModelName: 1, ProductPartNumber: 1, ProductProductImage: 1, ProductProductNumber: 1, ProductProductTypeId: 1, ProductStockQuantity: 1, ProductUnitStockId: 1, ProductUpdateDate: 1, ProductUpdateUserId: 1, UpdateDate: 1, UpdateUserId: 1 }, ProductPrice: { Continued: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, OrderCategoryDescription: 1, OrderCategoryId: 1, OrderCategoryInsertDate: 1, OrderCategoryInsertUserId: 1, OrderCategoryIsActive: 1, OrderCategoryOrderCategoryName: 1, OrderCategoryUpdateDate: 1, OrderCategoryUpdateUserId: 1, Price: 1, ProductBinLocationId: 1, ProductCategoryUnitId: 1, ProductContinued: 1, ProductDescription: 1, ProductId: 1, ProductInsertDate: 1, ProductInsertUserId: 1, ProductIsActive: 1, ProductMinimumStock: 1, ProductModelName: 1, ProductPartNumber: 1, ProductPriceId: 1, ProductPriceNumber: 1, ProductProductImage: 1, ProductProductNumber: 1, ProductProductTypeId: 1, ProductStockQuantity: 1, ProductUnitStockId: 1, ProductUpdateDate: 1, ProductUpdateUserId: 1, UpdateDate: 1, UpdateUserId: 1 }, ProductType: { InsertDate: 1, InsertUserId: 1, IsActive: 1, ProductTypeId: 1, ProductTypeName: 1, UpdateDate: 1, UpdateUserId: 1 }, Products: { BinLocation: 1, BinLocationId: 1, BinLocationInsertDate: 1, BinLocationInsertUserId: 1, BinLocationIsActive: 1, BinLocationUpdateDate: 1, BinLocationUpdateUserId: 1, CategoryUnitCategoryUnitName: 1, CategoryUnitId: 1, CategoryUnitPricePerHour: 1, Continued: 1, Description: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, MinimumStock: 1, ModelName: 1, PartNumber: 1, ProductId: 1, ProductImage: 1, ProductNumber: 1, ProductTypeId: 1, ProductTypeInsertDate: 1, ProductTypeInsertUserId: 1, ProductTypeIsActive: 1, ProductTypeProductTypeName: 1, ProductTypeUpdateDate: 1, ProductTypeUpdateUserId: 1, StockQuantity: 1, UnitStock: 1, UnitStockId: 1, UnitStockInsertDate: 1, UnitStockInsertUserId: 1, UnitStockIsActive: 1, UnitStockUpdateDate: 1, UnitStockUpdateUserId: 1, UpdateDate: 1, UpdateUserId: 1 }, ProductsLog: { BinLocation: 1, ChangingUserId: 1, Continued: 1, Description: 1, ModelName: 1, OperationType: 1, PartNumber: 1, ProductId: 1, ProductImage: 1, ProductLogId: 1, ProductTypeId: 1, UnitStock: 1, ValidFrom: 1, ValidUntil: 1 }, Province: { InsertDate: 1, InsertUserId: 1, IsActive: 1, IslandId: 1, IslandInsertDate: 1, IslandInsertUserId: 1, IslandIsActive: 1, IslandIslandCode: 1, IslandIslandName: 1, IslandUpdateDate: 1, IslandUpdateUserId: 1, ProvinceCode: 1, ProvinceId: 1, ProvinceName: 1, UpdateDate: 1, UpdateUserId: 1 }, Supplier: { Address: 1, ContactName: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Phone: 1, SupplierId: 1, SupplierName: 1, UpdateDate: 1, UpdateUserId: 1 }, UnitStock: { InsertDate: 1, InsertUserId: 1, IsActive: 1, UnitStock: 1, UnitStockId: 1, UpdateDate: 1, UpdateUserId: 1 } }, Transaction: { Inventory: { CompanyId: 1, DocumentNo: 1, InsertDate: 1, InsertUserId: 1, InventoryId: 1, InventoryStatus: 1, IsActive: 1, OrderCategoryId: 1, ProductBasePrice: 1, ProductBasePriceNumber: 1, ProductBinLocationId: 1, ProductCategoryUnitId: 1, ProductContinued: 1, ProductDescription: 1, ProductId: 1, ProductInsertDate: 1, ProductInsertUserId: 1, ProductIsActive: 1, ProductMinimumStock: 1, ProductModelName: 1, ProductPartNumber: 1, ProductPrice: 1, ProductPriceNumber: 1, ProductProductImage: 1, ProductProductNumber: 1, ProductProductTypeId: 1, ProductStockQuantity: 1, ProductUnitStockId: 1, ProductUpdateDate: 1, ProductUpdateUserId: 1, Qty: 1, Stock: 1, UpdateDate: 1, UpdateUserId: 1 }, MovementStock: { Description: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, MovementQty: 1, MovementStockId: 1, MovementStockNumber: 1, MovementTypeId: 1, MovementTypeMovementTypeName: 1, MovementTypeStatusInOut: 1, ProductBinLocationId: 1, ProductCategoryUnitId: 1, ProductContinued: 1, ProductDescription: 1, ProductId: 1, ProductInsertDate: 1, ProductInsertUserId: 1, ProductIsActive: 1, ProductMinimumStock: 1, ProductModelName: 1, ProductPartNumber: 1, ProductProductImage: 1, ProductProductNumber: 1, ProductProductTypeId: 1, ProductStockQuantity: 1, ProductUnitStockId: 1, ProductUpdateDate: 1, ProductUpdateUserId: 1, UpdateDate: 1, UpdateUserId: 1 }, OrderDetail: { ActualPrice: 1, AsAlternativeItem: 1, BasePrice: 1, CancellationBy: 1, CancellationDate: 1, Discount: 1, DiscountPercent: 1, GrossAmount: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, KmInUse: 1, ManufactureYear: 1, OrderCategoryId: 1, OrderCompanyId: 1, OrderCustomerId: 1, OrderDetailId: 1, OrderId: 1, OrderInsertDate: 1, OrderInsertUserId: 1, OrderIsActive: 1, OrderKmInUse: 1, OrderOrderDate: 1, OrderOrderNumber: 1, OrderOrderStatus: 1, OrderPaymentService: 1, OrderProductTypeId: 1, OrderQty: 1, OrderUpdateDate: 1, OrderUpdateUserId: 1, OrderUserId: 1, ParentItemId: 1, Ppn: 1, ProductBasePriceId: 1, ProductBasePriceNumber: 1, ProductBinLocationId: 1, ProductCategoryUnitId: 1, ProductContinued: 1, ProductDescription: 1, ProductId: 1, ProductInsertDate: 1, ProductInsertUserId: 1, ProductIsActive: 1, ProductMinimumStock: 1, ProductModelName: 1, ProductPartNumber: 1, ProductProductImage: 1, ProductProductNumber: 1, ProductProductTypeId: 1, ProductStockQuantity: 1, ProductUnitStockId: 1, ProductUpdateDate: 1, ProductUpdateUserId: 1, SerialNumber: 1, ServiceQuantity: 1, ServiceUnitId: 1, Stock: 1, Total: 1, UpdateDate: 1, UpdateUserId: 1, WarrantyNumber: 1 }, Orders: { CompanyAddress: 1, CompanyCityId: 1, CompanyCompanyName: 1, CompanyContactPerson: 1, CompanyDeleteDate: 1, CompanyDeleteUserId: 1, CompanyFax: 1, CompanyId: 1, CompanyInsertDate: 1, CompanyInsertUserId: 1, CompanyIsActive: 1, CompanyIslandId: 1, CompanyLogo: 1, CompanyOfficeType: 1, CompanyPhone: 1, CompanyProvinceId: 1, CompanyUpdateDate: 1, CompanyUpdateUserId: 1, CustomerAddress: 1, CustomerBirthDate: 1, CustomerBirthPlace: 1, CustomerCityId: 1, CustomerCompanyId: 1, CustomerContactPerson: 1, CustomerCustomerName: 1, CustomerCustomerNumber: 1, CustomerDeleteDate: 1, CustomerDeleteUserId: 1, CustomerEmail: 1, CustomerFax: 1, CustomerId: 1, CustomerInsertDate: 1, CustomerInsertUserId: 1, CustomerIsActive: 1, CustomerIslandId: 1, CustomerNpwp: 1, CustomerPhone: 1, CustomerPic: 1, CustomerPostCode: 1, CustomerProvinceId: 1, CustomerUpdateDate: 1, CustomerUpdateUserId: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, KmInUse: 1, OrderDate: 1, OrderId: 1, OrderNumber: 1, OrderStatus: 1, PaymentService: 1, ProductTypeId: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1 }, PurchaseOrder: { CompanyAddress: 1, CompanyCityId: 1, CompanyCompanyName: 1, CompanyContactPerson: 1, CompanyDeleteDate: 1, CompanyDeleteUserId: 1, CompanyFax: 1, CompanyId: 1, CompanyInsertDate: 1, CompanyInsertUserId: 1, CompanyIsActive: 1, CompanyIslandId: 1, CompanyLogo: 1, CompanyOfficeType: 1, CompanyPhone: 1, CompanyProvinceId: 1, CompanyUpdateDate: 1, CompanyUpdateUserId: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, OrderCategoryId: 1, PickupPoint: 1, ProductTypeId: 1, ProductTypeInsertDate: 1, ProductTypeInsertUserId: 1, ProductTypeIsActive: 1, ProductTypeProductTypeName: 1, ProductTypeUpdateDate: 1, ProductTypeUpdateUserId: 1, PurchaseOrderDate: 1, PurchaseOrderId: 1, PurchaseOrderNumber: 1, PurchaseOrderStatus: 1, UpdateDate: 1, UpdateUserId: 1 }, PurchaseOrderDetail: { ApprovalStatusDiscount: 1, BackOrderQty: 1, CancellationBy: 1, CancellationDate: 1, CommentDiscount: 1, DiscountRequest: 1, GrossAmount: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Ppn: 1, Price: 1, ProductBinLocationId: 1, ProductCategoryUnitId: 1, ProductContinued: 1, ProductDescription: 1, ProductId: 1, ProductInsertDate: 1, ProductInsertUserId: 1, ProductIsActive: 1, ProductMinimumStock: 1, ProductModelName: 1, ProductPartNumber: 1, ProductPriceContinued: 1, ProductPriceId: 1, ProductPriceInsertDate: 1, ProductPriceInsertUserId: 1, ProductPriceIsActive: 1, ProductPriceNumber: 1, ProductPriceOrderCategoryId: 1, ProductPricePrice: 1, ProductPriceProductId: 1, ProductPriceProductPriceNumber: 1, ProductPriceUpdateDate: 1, ProductPriceUpdateUserId: 1, ProductProductImage: 1, ProductProductNumber: 1, ProductProductTypeId: 1, ProductStockQuantity: 1, ProductUnitStockId: 1, ProductUpdateDate: 1, ProductUpdateUserId: 1, PurchaseOrderCompanyId: 1, PurchaseOrderDetailId: 1, PurchaseOrderId: 1, PurchaseOrderInsertDate: 1, PurchaseOrderInsertUserId: 1, PurchaseOrderIsActive: 1, PurchaseOrderOrderCategoryId: 1, PurchaseOrderPickupPoint: 1, PurchaseOrderProductTypeId: 1, PurchaseOrderPurchaseOrderDate: 1, PurchaseOrderPurchaseOrderNumber: 1, PurchaseOrderPurchaseOrderStatus: 1, PurchaseOrderUpdateDate: 1, PurchaseOrderUpdateUserId: 1, Quantity: 1, ReceiveOrderDetailId: 1, ReceiveQty: 1, SupportingDocumentDiscount: 1, Total: 1, UpdateDate: 1, UpdateUserId: 1 }, ReceiveOrder: { AcknowledgeBy: 1, CompanyAddress: 1, CompanyCityId: 1, CompanyCompanyName: 1, CompanyContactPerson: 1, CompanyDeleteDate: 1, CompanyDeleteUserId: 1, CompanyFax: 1, CompanyId: 1, CompanyInsertDate: 1, CompanyInsertUserId: 1, CompanyIsActive: 1, CompanyIslandId: 1, CompanyLogo: 1, CompanyOfficeType: 1, CompanyPhone: 1, CompanyProvinceId: 1, CompanyUpdateDate: 1, CompanyUpdateUserId: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, ProductTypeId: 1, PurchaseOrderCompanyId: 1, PurchaseOrderId: 1, PurchaseOrderInsertDate: 1, PurchaseOrderInsertUserId: 1, PurchaseOrderIsActive: 1, PurchaseOrderOrderCategoryId: 1, PurchaseOrderPickupPoint: 1, PurchaseOrderProductTypeId: 1, PurchaseOrderPurchaseOrderDate: 1, PurchaseOrderPurchaseOrderNumber: 1, PurchaseOrderPurchaseOrderStatus: 1, PurchaseOrderUpdateDate: 1, PurchaseOrderUpdateUserId: 1, ReceiveBy: 1, ReceiveDate: 1, ReceiveOrderId: 1, ReceiveOrderNumber: 1, ReceiveOrderStatus: 1, UpdateDate: 1, UpdateUserId: 1 }, ReceiveOrderDetail: { BackOrderQty: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, PoQty: 1, Price: 1, ProductBinLocationId: 1, ProductCategoryUnitId: 1, ProductContinued: 1, ProductDescription: 1, ProductId: 1, ProductInsertDate: 1, ProductInsertUserId: 1, ProductIsActive: 1, ProductMinimumStock: 1, ProductModelName: 1, ProductPartNumber: 1, ProductProductImage: 1, ProductProductNumber: 1, ProductProductTypeId: 1, ProductStockQuantity: 1, ProductUnitStockId: 1, ProductUpdateDate: 1, ProductUpdateUserId: 1, ReceiveComplete: 1, ReceiveOrderAcknowledgeBy: 1, ReceiveOrderCompanyId: 1, ReceiveOrderDetailId: 1, ReceiveOrderId: 1, ReceiveOrderInsertDate: 1, ReceiveOrderInsertUserId: 1, ReceiveOrderIsActive: 1, ReceiveOrderProductTypeId: 1, ReceiveOrderPurchaseOrderId: 1, ReceiveOrderReceiveBy: 1, ReceiveOrderReceiveDate: 1, ReceiveOrderReceiveOrderNumber: 1, ReceiveOrderReceiveOrderStatus: 1, ReceiveOrderUpdateDate: 1, ReceiveOrderUpdateUserId: 1, ReceiveQty: 1, UpdateDate: 1, UpdateUserId: 1 }, SerialNumberUnit: { Available: 1, CategoryUnitId: 1, ManufactureYear: 1, ReceiveOrderAcknowledgeBy: 1, ReceiveOrderCompanyId: 1, ReceiveOrderId: 1, ReceiveOrderInsertDate: 1, ReceiveOrderInsertUserId: 1, ReceiveOrderIsActive: 1, ReceiveOrderProductTypeId: 1, ReceiveOrderPurchaseOrderId: 1, ReceiveOrderReceiveBy: 1, ReceiveOrderReceiveDate: 1, ReceiveOrderReceiveOrderNumber: 1, ReceiveOrderReceiveOrderStatus: 1, ReceiveOrderUpdateDate: 1, ReceiveOrderUpdateUserId: 1, SerialNumber: 1, SerialNumberUnitId: 1, WarrantyNumber: 1 }, ServiceUnit: { CustomerAddress: 1, CustomerBirthDate: 1, CustomerBirthPlace: 1, CustomerCityId: 1, CustomerCompanyId: 1, CustomerContactPerson: 1, CustomerCustomerName: 1, CustomerCustomerNumber: 1, CustomerDeleteDate: 1, CustomerDeleteUserId: 1, CustomerEmail: 1, CustomerFax: 1, CustomerId: 1, CustomerInsertDate: 1, CustomerInsertUserId: 1, CustomerIsActive: 1, CustomerIslandId: 1, CustomerNpwp: 1, CustomerPhone: 1, CustomerPic: 1, CustomerPostCode: 1, CustomerProvinceId: 1, CustomerUpdateDate: 1, CustomerUpdateUserId: 1, Hm: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, ManufactureYear: 1, OrderUnitCompanyId: 1, OrderUnitCustomerId: 1, OrderUnitId: 1, OrderUnitInsertDate: 1, OrderUnitInsertUserId: 1, OrderUnitIsActive: 1, OrderUnitKmInUse: 1, OrderUnitOrderDate: 1, OrderUnitOrderNumber: 1, OrderUnitOrderStatus: 1, OrderUnitPaymentService: 1, OrderUnitProductTypeId: 1, OrderUnitUpdateDate: 1, OrderUnitUpdateUserId: 1, OrderUnitUserId: 1, ProductBinLocationId: 1, ProductCategoryUnitId: 1, ProductContinued: 1, ProductDescription: 1, ProductId: 1, ProductInsertDate: 1, ProductInsertUserId: 1, ProductIsActive: 1, ProductMinimumStock: 1, ProductModelName: 1, ProductPartNumber: 1, ProductProductImage: 1, ProductProductNumber: 1, ProductProductTypeId: 1, ProductStockQuantity: 1, ProductUnitStockId: 1, ProductUpdateDate: 1, ProductUpdateUserId: 1, Remark: 1, SerialNumber: 1, ServiceBy: 1, ServiceDate: 1, ServiceUnitId: 1, ServiceUnitNumber: 1, ServiceUnitStatus: 1, UpdateDate: 1, UpdateUserId: 1, WarrantyNumber: 1 }, ServiceUnitDetail: { ChargePerHour: 1, KmInUse: 1, OrderIdService: 1, ServiceBy: 1, ServiceCharge: 1, ServiceDate: 1, ServiceHour: 1, ServiceUnitCustomerId: 1, ServiceUnitDetailId: 1, ServiceUnitHm: 1, ServiceUnitId: 1, ServiceUnitInsertDate: 1, ServiceUnitInsertUserId: 1, ServiceUnitIsActive: 1, ServiceUnitManufactureYear: 1, ServiceUnitOrderUnitId: 1, ServiceUnitProductId: 1, ServiceUnitRemark: 1, ServiceUnitSerialNumber: 1, ServiceUnitServiceBy: 1, ServiceUnitServiceDate: 1, ServiceUnitServiceUnitNumber: 1, ServiceUnitServiceUnitStatus: 1, ServiceUnitType: 1, ServiceUnitTypeCategoryUnitId: 1, ServiceUnitTypeChargePerHour: 1, ServiceUnitTypeContinued: 1, ServiceUnitTypeDescription: 1, ServiceUnitTypeId: 1, ServiceUnitTypeJobCodeNo: 1, ServiceUnitTypeProductId: 1, ServiceUnitTypeStandartOpTime: 1, ServiceUnitUpdateDate: 1, ServiceUnitUpdateUserId: 1, ServiceUnitWarrantyNumber: 1 }, ServiceUnitType: { CategoryUnitCategoryUnitName: 1, CategoryUnitId: 1, CategoryUnitPricePerHour: 1, ChargePerHour: 1, Continued: 1, Description: 1, JobCodeNo: 1, ProductId: 1, ServiceUnitType: 1, ServiceUnitTypeId: 1, StandartOpTime: 1 }, ServiceUnitTypeDetail: { CategoryUnitId: 1, ChargePerHour: 1, Description: 1, JobCodeNo: 1, ServiceHour: 1, ServiceUnitId: 1, ServiceUnitType: 1, ServiceUnitTypeCategoryUnitId: 1, ServiceUnitTypeChargePerHour: 1, ServiceUnitTypeContinued: 1, ServiceUnitTypeDescription: 1, ServiceUnitTypeDetailId: 1, ServiceUnitTypeId: 1, ServiceUnitTypeJobCodeNo: 1, ServiceUnitTypeProductId: 1, ServiceUnitTypeStandartOpTime: 1, StandartOpTime: 1, TotalCharge: 1 }, ServiceUnitTypePrice: { CategoryUnitCategoryUnitName: 1, CategoryUnitId: 1, CategoryUnitPricePerHour: 1, PricePerHour: 1, ServiceUnitTypePriceId: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = DIMSOnline.Texts || (DIMSOnline.Texts = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var InventoryForm = /** @class */ (function (_super) {
            __extends(InventoryForm, _super);
            function InventoryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!InventoryForm.init) {
                    InventoryForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(InventoryForm, [
                        'ProductId', w0,
                        'OrderCategoryId', w0,
                        'Qty', w0,
                        'InventoryStatus', w1,
                        'DocumentNo', w1,
                        'Stock', w0,
                        'ProductPrice', w2,
                        'ProductPriceNumber', w1,
                        'ProductBasePrice', w2,
                        'ProductBasePriceNumber', w1,
                        'InsertUserId', w0,
                        'InsertDate', w3,
                        'UpdateUserId', w0,
                        'UpdateDate', w3,
                        'IsActive', w0,
                        'CompanyId', w0
                    ]);
                }
                return _this;
            }
            InventoryForm.formKey = 'Transaction.Inventory';
            return InventoryForm;
        }(Serenity.PrefixedContext));
        Transaction.InventoryForm = InventoryForm;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var InventoryRow;
        (function (InventoryRow) {
            InventoryRow.idProperty = 'InventoryId';
            InventoryRow.nameProperty = 'InventoryStatus';
            InventoryRow.localTextPrefix = 'Transaction.Inventory';
            InventoryRow.deletePermission = 'Administration:Transaction';
            InventoryRow.insertPermission = 'Administration:Transaction';
            InventoryRow.readPermission = 'Administration:Transaction';
            InventoryRow.updatePermission = 'Administration:Transaction';
        })(InventoryRow = Transaction.InventoryRow || (Transaction.InventoryRow = {}));
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var InventoryService;
        (function (InventoryService) {
            InventoryService.baseUrl = 'Transaction/Inventory';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                InventoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(InventoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InventoryService = Transaction.InventoryService || (Transaction.InventoryService = {}));
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var MovementStockForm = /** @class */ (function (_super) {
            __extends(MovementStockForm, _super);
            function MovementStockForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MovementStockForm.init) {
                    MovementStockForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(MovementStockForm, [
                        'MovementTypeId', w0,
                        'ProductId', w0,
                        'MovementQty', w0,
                        'MovementStockNumber', w1,
                        'Description', w1,
                        'InsertUserId', w0,
                        'InsertDate', w2,
                        'UpdateUserId', w0,
                        'UpdateDate', w2,
                        'IsActive', w0
                    ]);
                }
                return _this;
            }
            MovementStockForm.formKey = 'Transaction.MovementStock';
            return MovementStockForm;
        }(Serenity.PrefixedContext));
        Transaction.MovementStockForm = MovementStockForm;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var MovementStockRow;
        (function (MovementStockRow) {
            MovementStockRow.idProperty = 'MovementStockId';
            MovementStockRow.nameProperty = 'MovementStockNumber';
            MovementStockRow.localTextPrefix = 'Transaction.MovementStock';
            MovementStockRow.deletePermission = 'Administration:Transaction';
            MovementStockRow.insertPermission = 'Administration:Transaction';
            MovementStockRow.readPermission = 'Administration:Transaction';
            MovementStockRow.updatePermission = 'Administration:Transaction';
        })(MovementStockRow = Transaction.MovementStockRow || (Transaction.MovementStockRow = {}));
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var MovementStockService;
        (function (MovementStockService) {
            MovementStockService.baseUrl = 'Transaction/MovementStock';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MovementStockService[x] = function (r, s, o) {
                    return Q.serviceRequest(MovementStockService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MovementStockService = Transaction.MovementStockService || (Transaction.MovementStockService = {}));
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var OrderDetailForm = /** @class */ (function (_super) {
            __extends(OrderDetailForm, _super);
            function OrderDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OrderDetailForm.init) {
                    OrderDetailForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.BooleanEditor;
                    var w4 = s.DateEditor;
                    Q.initFormType(OrderDetailForm, [
                        'OrderId', w0,
                        'ProductId', w0,
                        'OrderQty', w0,
                        'Stock', w0,
                        'ProductBasePriceId', w0,
                        'ProductBasePriceNumber', w1,
                        'OrderCategoryId', w0,
                        'BasePrice', w2,
                        'ActualPrice', w2,
                        'GrossAmount', w2,
                        'DiscountPercent', w0,
                        'Discount', w2,
                        'Total', w2,
                        'Ppn', w2,
                        'KmInUse', w0,
                        'ServiceQuantity', w0,
                        'SerialNumber', w1,
                        'ManufactureYear', w1,
                        'WarrantyNumber', w1,
                        'ServiceUnitId', w0,
                        'AsAlternativeItem', w3,
                        'ParentItemId', w0,
                        'InsertUserId', w0,
                        'InsertDate', w4,
                        'UpdateUserId', w0,
                        'UpdateDate', w4,
                        'IsActive', w0,
                        'CancellationDate', w4,
                        'CancellationBy', w0
                    ]);
                }
                return _this;
            }
            OrderDetailForm.formKey = 'Transaction.OrderDetail';
            return OrderDetailForm;
        }(Serenity.PrefixedContext));
        Transaction.OrderDetailForm = OrderDetailForm;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var OrderDetailRow;
        (function (OrderDetailRow) {
            OrderDetailRow.idProperty = 'OrderDetailId';
            OrderDetailRow.nameProperty = 'ProductBasePriceNumber';
            OrderDetailRow.localTextPrefix = 'Transaction.OrderDetail';
            OrderDetailRow.deletePermission = 'Administration:Transaction';
            OrderDetailRow.insertPermission = 'Administration:Transaction';
            OrderDetailRow.readPermission = 'Administration:Transaction';
            OrderDetailRow.updatePermission = 'Administration:Transaction';
        })(OrderDetailRow = Transaction.OrderDetailRow || (Transaction.OrderDetailRow = {}));
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var OrderDetailService;
        (function (OrderDetailService) {
            OrderDetailService.baseUrl = 'Transaction/OrderDetail';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OrderDetailService[x] = function (r, s, o) {
                    return Q.serviceRequest(OrderDetailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OrderDetailService = Transaction.OrderDetailService || (Transaction.OrderDetailService = {}));
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var OrdersForm = /** @class */ (function (_super) {
            __extends(OrdersForm, _super);
            function OrdersForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OrdersForm.init) {
                    OrdersForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(OrdersForm, [
                        'OrderNumber', w0,
                        'OrderDate', w1,
                        'CustomerId', w2,
                        'UserId', w2,
                        'ProductTypeId', w2,
                        'KmInUse', w2,
                        'PaymentService', w3,
                        'OrderStatus', w0,
                        'InsertUserId', w2,
                        'InsertDate', w1,
                        'UpdateUserId', w2,
                        'UpdateDate', w1,
                        'IsActive', w2,
                        'CompanyId', w2
                    ]);
                }
                return _this;
            }
            OrdersForm.formKey = 'Transaction.Orders';
            return OrdersForm;
        }(Serenity.PrefixedContext));
        Transaction.OrdersForm = OrdersForm;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var OrdersRow;
        (function (OrdersRow) {
            OrdersRow.idProperty = 'OrderId';
            OrdersRow.nameProperty = 'OrderNumber';
            OrdersRow.localTextPrefix = 'Transaction.Orders';
            OrdersRow.deletePermission = 'Administration:Transaction';
            OrdersRow.insertPermission = 'Administration:Transaction';
            OrdersRow.readPermission = 'Administration:Transaction';
            OrdersRow.updatePermission = 'Administration:Transaction';
        })(OrdersRow = Transaction.OrdersRow || (Transaction.OrdersRow = {}));
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var OrdersService;
        (function (OrdersService) {
            OrdersService.baseUrl = 'Transaction/Orders';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OrdersService[x] = function (r, s, o) {
                    return Q.serviceRequest(OrdersService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OrdersService = Transaction.OrdersService || (Transaction.OrdersService = {}));
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction_1) {
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var PurchaseOrderDetailForm = /** @class */ (function (_super) {
            __extends(PurchaseOrderDetailForm, _super);
            function PurchaseOrderDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PurchaseOrderDetailForm.init) {
                    PurchaseOrderDetailForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(PurchaseOrderDetailForm, [
                        'PurchaseOrderId', w0,
                        'ProductId', w0,
                        'Quantity', w0,
                        'ProductPriceId', w0,
                        'ProductPriceNumber', w1,
                        'Price', w2,
                        'GrossAmount', w2,
                        'Ppn', w2,
                        'Total', w2,
                        'InsertUserId', w0,
                        'InsertDate', w3,
                        'UpdateUserId', w0,
                        'UpdateDate', w3,
                        'IsActive', w0,
                        'ReceiveOrderDetailId', w0,
                        'ReceiveQty', w0,
                        'BackOrderQty', w0,
                        'CancellationDate', w3,
                        'CancellationBy', w0,
                        'DiscountRequest', w2,
                        'SupportingDocumentDiscount', w1,
                        'ApprovalStatusDiscount', w1,
                        'CommentDiscount', w1
                    ]);
                }
                return _this;
            }
            PurchaseOrderDetailForm.formKey = 'Transaction.PurchaseOrderDetail';
            return PurchaseOrderDetailForm;
        }(Serenity.PrefixedContext));
        Transaction.PurchaseOrderDetailForm = PurchaseOrderDetailForm;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var PurchaseOrderDetailRow;
        (function (PurchaseOrderDetailRow) {
            PurchaseOrderDetailRow.idProperty = 'PurchaseOrderDetailId';
            PurchaseOrderDetailRow.nameProperty = 'ProductPriceNumber';
            PurchaseOrderDetailRow.localTextPrefix = 'Transaction.PurchaseOrderDetail';
            PurchaseOrderDetailRow.deletePermission = 'Administration:Transaction';
            PurchaseOrderDetailRow.insertPermission = 'Administration:Transaction';
            PurchaseOrderDetailRow.readPermission = 'Administration:Transaction';
            PurchaseOrderDetailRow.updatePermission = 'Administration:Transaction';
        })(PurchaseOrderDetailRow = Transaction.PurchaseOrderDetailRow || (Transaction.PurchaseOrderDetailRow = {}));
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var PurchaseOrderDetailService;
        (function (PurchaseOrderDetailService) {
            PurchaseOrderDetailService.baseUrl = 'Transaction/PurchaseOrderDetail';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PurchaseOrderDetailService[x] = function (r, s, o) {
                    return Q.serviceRequest(PurchaseOrderDetailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PurchaseOrderDetailService = Transaction.PurchaseOrderDetailService || (Transaction.PurchaseOrderDetailService = {}));
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var PurchaseOrderForm = /** @class */ (function (_super) {
            __extends(PurchaseOrderForm, _super);
            function PurchaseOrderForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PurchaseOrderForm.init) {
                    PurchaseOrderForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(PurchaseOrderForm, [
                        'PurchaseOrderNumber', w0,
                        'CompanyId', w1,
                        'PurchaseOrderDate', w2,
                        'OrderCategoryId', w1,
                        'ProductTypeId', w1,
                        'PickupPoint', w0,
                        'PurchaseOrderStatus', w0,
                        'InsertUserId', w1,
                        'InsertDate', w2,
                        'UpdateUserId', w1,
                        'UpdateDate', w2,
                        'IsActive', w1
                    ]);
                }
                return _this;
            }
            PurchaseOrderForm.formKey = 'Transaction.PurchaseOrder';
            return PurchaseOrderForm;
        }(Serenity.PrefixedContext));
        Transaction.PurchaseOrderForm = PurchaseOrderForm;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var PurchaseOrderRow;
        (function (PurchaseOrderRow) {
            PurchaseOrderRow.idProperty = 'PurchaseOrderId';
            PurchaseOrderRow.nameProperty = 'PurchaseOrderNumber';
            PurchaseOrderRow.localTextPrefix = 'Transaction.PurchaseOrder';
            PurchaseOrderRow.deletePermission = 'Administration:Transaction';
            PurchaseOrderRow.insertPermission = 'Administration:Transaction';
            PurchaseOrderRow.readPermission = 'Administration:Transaction';
            PurchaseOrderRow.updatePermission = 'Administration:Transaction';
        })(PurchaseOrderRow = Transaction.PurchaseOrderRow || (Transaction.PurchaseOrderRow = {}));
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var PurchaseOrderService;
        (function (PurchaseOrderService) {
            PurchaseOrderService.baseUrl = 'Transaction/PurchaseOrder';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PurchaseOrderService[x] = function (r, s, o) {
                    return Q.serviceRequest(PurchaseOrderService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PurchaseOrderService = Transaction.PurchaseOrderService || (Transaction.PurchaseOrderService = {}));
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ReceiveOrderDetailForm = /** @class */ (function (_super) {
            __extends(ReceiveOrderDetailForm, _super);
            function ReceiveOrderDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ReceiveOrderDetailForm.init) {
                    ReceiveOrderDetailForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(ReceiveOrderDetailForm, [
                        'ReceiveOrderId', w0,
                        'ProductId', w0,
                        'PoQty', w0,
                        'ReceiveQty', w0,
                        'BackOrderQty', w0,
                        'Price', w1,
                        'ReceiveComplete', w2,
                        'InsertUserId', w0,
                        'InsertDate', w3,
                        'UpdateUserId', w0,
                        'UpdateDate', w3,
                        'IsActive', w0
                    ]);
                }
                return _this;
            }
            ReceiveOrderDetailForm.formKey = 'Transaction.ReceiveOrderDetail';
            return ReceiveOrderDetailForm;
        }(Serenity.PrefixedContext));
        Transaction.ReceiveOrderDetailForm = ReceiveOrderDetailForm;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ReceiveOrderDetailRow;
        (function (ReceiveOrderDetailRow) {
            ReceiveOrderDetailRow.idProperty = 'ReceiveOrderDetailId';
            ReceiveOrderDetailRow.localTextPrefix = 'Transaction.ReceiveOrderDetail';
            ReceiveOrderDetailRow.deletePermission = 'Administration:Transaction';
            ReceiveOrderDetailRow.insertPermission = 'Administration:Transaction';
            ReceiveOrderDetailRow.readPermission = 'Administration:Transaction';
            ReceiveOrderDetailRow.updatePermission = 'Administration:Transaction';
        })(ReceiveOrderDetailRow = Transaction.ReceiveOrderDetailRow || (Transaction.ReceiveOrderDetailRow = {}));
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ReceiveOrderDetailService;
        (function (ReceiveOrderDetailService) {
            ReceiveOrderDetailService.baseUrl = 'Transaction/ReceiveOrderDetail';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ReceiveOrderDetailService[x] = function (r, s, o) {
                    return Q.serviceRequest(ReceiveOrderDetailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ReceiveOrderDetailService = Transaction.ReceiveOrderDetailService || (Transaction.ReceiveOrderDetailService = {}));
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ReceiveOrderForm = /** @class */ (function (_super) {
            __extends(ReceiveOrderForm, _super);
            function ReceiveOrderForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ReceiveOrderForm.init) {
                    ReceiveOrderForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(ReceiveOrderForm, [
                        'ProductTypeId', w0,
                        'ReceiveOrderNumber', w1,
                        'PurchaseOrderId', w0,
                        'ReceiveDate', w2,
                        'ReceiveBy', w1,
                        'AcknowledgeBy', w1,
                        'ReceiveOrderStatus', w1,
                        'InsertUserId', w0,
                        'InsertDate', w2,
                        'UpdateUserId', w0,
                        'UpdateDate', w2,
                        'IsActive', w0,
                        'CompanyId', w0
                    ]);
                }
                return _this;
            }
            ReceiveOrderForm.formKey = 'Transaction.ReceiveOrder';
            return ReceiveOrderForm;
        }(Serenity.PrefixedContext));
        Transaction.ReceiveOrderForm = ReceiveOrderForm;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ReceiveOrderRow;
        (function (ReceiveOrderRow) {
            ReceiveOrderRow.idProperty = 'ReceiveOrderId';
            ReceiveOrderRow.nameProperty = 'ReceiveOrderNumber';
            ReceiveOrderRow.localTextPrefix = 'Transaction.ReceiveOrder';
            ReceiveOrderRow.deletePermission = 'Administration:Transaction';
            ReceiveOrderRow.insertPermission = 'Administration:Transaction';
            ReceiveOrderRow.readPermission = 'Administration:Transaction';
            ReceiveOrderRow.updatePermission = 'Administration:Transaction';
        })(ReceiveOrderRow = Transaction.ReceiveOrderRow || (Transaction.ReceiveOrderRow = {}));
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ReceiveOrderService;
        (function (ReceiveOrderService) {
            ReceiveOrderService.baseUrl = 'Transaction/ReceiveOrder';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ReceiveOrderService[x] = function (r, s, o) {
                    return Q.serviceRequest(ReceiveOrderService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ReceiveOrderService = Transaction.ReceiveOrderService || (Transaction.ReceiveOrderService = {}));
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var SerialNumberUnitForm = /** @class */ (function (_super) {
            __extends(SerialNumberUnitForm, _super);
            function SerialNumberUnitForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SerialNumberUnitForm.init) {
                    SerialNumberUnitForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.BooleanEditor;
                    Q.initFormType(SerialNumberUnitForm, [
                        'ReceiveOrderId', w0,
                        'CategoryUnitId', w0,
                        'SerialNumber', w1,
                        'ManufactureYear', w1,
                        'WarrantyNumber', w1,
                        'Available', w2
                    ]);
                }
                return _this;
            }
            SerialNumberUnitForm.formKey = 'Transaction.SerialNumberUnit';
            return SerialNumberUnitForm;
        }(Serenity.PrefixedContext));
        Transaction.SerialNumberUnitForm = SerialNumberUnitForm;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var SerialNumberUnitRow;
        (function (SerialNumberUnitRow) {
            SerialNumberUnitRow.idProperty = 'SerialNumberUnitId';
            SerialNumberUnitRow.nameProperty = 'SerialNumber';
            SerialNumberUnitRow.localTextPrefix = 'Transaction.SerialNumberUnit';
            SerialNumberUnitRow.deletePermission = 'Administration:Transaction';
            SerialNumberUnitRow.insertPermission = 'Administration:Transaction';
            SerialNumberUnitRow.readPermission = 'Administration:Transaction';
            SerialNumberUnitRow.updatePermission = 'Administration:Transaction';
        })(SerialNumberUnitRow = Transaction.SerialNumberUnitRow || (Transaction.SerialNumberUnitRow = {}));
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var SerialNumberUnitService;
        (function (SerialNumberUnitService) {
            SerialNumberUnitService.baseUrl = 'Transaction/SerialNumberUnit';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SerialNumberUnitService[x] = function (r, s, o) {
                    return Q.serviceRequest(SerialNumberUnitService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SerialNumberUnitService = Transaction.SerialNumberUnitService || (Transaction.SerialNumberUnitService = {}));
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ServiceUnitDetailForm = /** @class */ (function (_super) {
            __extends(ServiceUnitDetailForm, _super);
            function ServiceUnitDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ServiceUnitDetailForm.init) {
                    ServiceUnitDetailForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(ServiceUnitDetailForm, [
                        'ServiceUnitId', w0,
                        'ServiceUnitTypeId', w0,
                        'ChargePerHour', w1,
                        'ServiceHour', w0,
                        'ServiceCharge', w1,
                        'ServiceBy', w2,
                        'KmInUse', w0,
                        'ServiceDate', w3,
                        'OrderIdService', w0
                    ]);
                }
                return _this;
            }
            ServiceUnitDetailForm.formKey = 'Transaction.ServiceUnitDetail';
            return ServiceUnitDetailForm;
        }(Serenity.PrefixedContext));
        Transaction.ServiceUnitDetailForm = ServiceUnitDetailForm;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ServiceUnitDetailRow;
        (function (ServiceUnitDetailRow) {
            ServiceUnitDetailRow.idProperty = 'ServiceUnitDetailId';
            ServiceUnitDetailRow.nameProperty = 'ServiceBy';
            ServiceUnitDetailRow.localTextPrefix = 'Transaction.ServiceUnitDetail';
            ServiceUnitDetailRow.deletePermission = 'Administration:Transaction';
            ServiceUnitDetailRow.insertPermission = 'Administration:Transaction';
            ServiceUnitDetailRow.readPermission = 'Administration:Transaction';
            ServiceUnitDetailRow.updatePermission = 'Administration:Transaction';
        })(ServiceUnitDetailRow = Transaction.ServiceUnitDetailRow || (Transaction.ServiceUnitDetailRow = {}));
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ServiceUnitDetailService;
        (function (ServiceUnitDetailService) {
            ServiceUnitDetailService.baseUrl = 'Transaction/ServiceUnitDetail';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ServiceUnitDetailService[x] = function (r, s, o) {
                    return Q.serviceRequest(ServiceUnitDetailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ServiceUnitDetailService = Transaction.ServiceUnitDetailService || (Transaction.ServiceUnitDetailService = {}));
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ServiceUnitForm = /** @class */ (function (_super) {
            __extends(ServiceUnitForm, _super);
            function ServiceUnitForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ServiceUnitForm.init) {
                    ServiceUnitForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(ServiceUnitForm, [
                        'ServiceUnitNumber', w0,
                        'ProductId', w1,
                        'OrderUnitId', w1,
                        'CustomerId', w1,
                        'ServiceDate', w2,
                        'ServiceBy', w0,
                        'SerialNumber', w0,
                        'ManufactureYear', w0,
                        'WarrantyNumber', w0,
                        'Remark', w0,
                        'ServiceUnitStatus', w0,
                        'Hm', w0,
                        'InsertUserId', w1,
                        'InsertDate', w2,
                        'UpdateUserId', w1,
                        'UpdateDate', w2,
                        'IsActive', w1
                    ]);
                }
                return _this;
            }
            ServiceUnitForm.formKey = 'Transaction.ServiceUnit';
            return ServiceUnitForm;
        }(Serenity.PrefixedContext));
        Transaction.ServiceUnitForm = ServiceUnitForm;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ServiceUnitRow;
        (function (ServiceUnitRow) {
            ServiceUnitRow.idProperty = 'ServiceUnitId';
            ServiceUnitRow.nameProperty = 'ServiceUnitNumber';
            ServiceUnitRow.localTextPrefix = 'Transaction.ServiceUnit';
            ServiceUnitRow.deletePermission = 'Administration:Transaction';
            ServiceUnitRow.insertPermission = 'Administration:Transaction';
            ServiceUnitRow.readPermission = 'Administration:Transaction';
            ServiceUnitRow.updatePermission = 'Administration:Transaction';
        })(ServiceUnitRow = Transaction.ServiceUnitRow || (Transaction.ServiceUnitRow = {}));
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ServiceUnitService;
        (function (ServiceUnitService) {
            ServiceUnitService.baseUrl = 'Transaction/ServiceUnit';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ServiceUnitService[x] = function (r, s, o) {
                    return Q.serviceRequest(ServiceUnitService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ServiceUnitService = Transaction.ServiceUnitService || (Transaction.ServiceUnitService = {}));
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ServiceUnitTypeDetailForm = /** @class */ (function (_super) {
            __extends(ServiceUnitTypeDetailForm, _super);
            function ServiceUnitTypeDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ServiceUnitTypeDetailForm.init) {
                    ServiceUnitTypeDetailForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(ServiceUnitTypeDetailForm, [
                        'ServiceUnitId', w0,
                        'CategoryUnitId', w0,
                        'JobCodeNo', w1,
                        'Description', w1,
                        'StandartOpTime', w2,
                        'ChargePerHour', w2,
                        'ServiceHour', w0,
                        'TotalCharge', w2,
                        'ServiceUnitTypeId', w0
                    ]);
                }
                return _this;
            }
            ServiceUnitTypeDetailForm.formKey = 'Transaction.ServiceUnitTypeDetail';
            return ServiceUnitTypeDetailForm;
        }(Serenity.PrefixedContext));
        Transaction.ServiceUnitTypeDetailForm = ServiceUnitTypeDetailForm;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ServiceUnitTypeDetailRow;
        (function (ServiceUnitTypeDetailRow) {
            ServiceUnitTypeDetailRow.idProperty = 'ServiceUnitTypeDetailId';
            ServiceUnitTypeDetailRow.nameProperty = 'JobCodeNo';
            ServiceUnitTypeDetailRow.localTextPrefix = 'Transaction.ServiceUnitTypeDetail';
            ServiceUnitTypeDetailRow.deletePermission = 'Administration:Transaction';
            ServiceUnitTypeDetailRow.insertPermission = 'Administration:Transaction';
            ServiceUnitTypeDetailRow.readPermission = 'Administration:Transaction';
            ServiceUnitTypeDetailRow.updatePermission = 'Administration:Transaction';
        })(ServiceUnitTypeDetailRow = Transaction.ServiceUnitTypeDetailRow || (Transaction.ServiceUnitTypeDetailRow = {}));
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ServiceUnitTypeDetailService;
        (function (ServiceUnitTypeDetailService) {
            ServiceUnitTypeDetailService.baseUrl = 'Transaction/ServiceUnitTypeDetail';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ServiceUnitTypeDetailService[x] = function (r, s, o) {
                    return Q.serviceRequest(ServiceUnitTypeDetailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ServiceUnitTypeDetailService = Transaction.ServiceUnitTypeDetailService || (Transaction.ServiceUnitTypeDetailService = {}));
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ServiceUnitTypeForm = /** @class */ (function (_super) {
            __extends(ServiceUnitTypeForm, _super);
            function ServiceUnitTypeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ServiceUnitTypeForm.init) {
                    ServiceUnitTypeForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(ServiceUnitTypeForm, [
                        'CategoryUnitId', w0,
                        'ProductId', w0,
                        'JobCodeNo', w1,
                        'Description', w1,
                        'ChargePerHour', w2,
                        'ServiceUnitType', w1,
                        'StandartOpTime', w2,
                        'Continued', w3
                    ]);
                }
                return _this;
            }
            ServiceUnitTypeForm.formKey = 'Transaction.ServiceUnitType';
            return ServiceUnitTypeForm;
        }(Serenity.PrefixedContext));
        Transaction.ServiceUnitTypeForm = ServiceUnitTypeForm;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ServiceUnitTypePriceForm = /** @class */ (function (_super) {
            __extends(ServiceUnitTypePriceForm, _super);
            function ServiceUnitTypePriceForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ServiceUnitTypePriceForm.init) {
                    ServiceUnitTypePriceForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(ServiceUnitTypePriceForm, [
                        'CategoryUnitId', w0,
                        'PricePerHour', w1
                    ]);
                }
                return _this;
            }
            ServiceUnitTypePriceForm.formKey = 'Transaction.ServiceUnitTypePrice';
            return ServiceUnitTypePriceForm;
        }(Serenity.PrefixedContext));
        Transaction.ServiceUnitTypePriceForm = ServiceUnitTypePriceForm;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ServiceUnitTypePriceRow;
        (function (ServiceUnitTypePriceRow) {
            ServiceUnitTypePriceRow.idProperty = 'ServiceUnitTypePriceId';
            ServiceUnitTypePriceRow.localTextPrefix = 'Transaction.ServiceUnitTypePrice';
            ServiceUnitTypePriceRow.deletePermission = 'Administration:Transaction';
            ServiceUnitTypePriceRow.insertPermission = 'Administration:Transaction';
            ServiceUnitTypePriceRow.readPermission = 'Administration:Transaction';
            ServiceUnitTypePriceRow.updatePermission = 'Administration:Transaction';
        })(ServiceUnitTypePriceRow = Transaction.ServiceUnitTypePriceRow || (Transaction.ServiceUnitTypePriceRow = {}));
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ServiceUnitTypePriceService;
        (function (ServiceUnitTypePriceService) {
            ServiceUnitTypePriceService.baseUrl = 'Transaction/ServiceUnitTypePrice';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ServiceUnitTypePriceService[x] = function (r, s, o) {
                    return Q.serviceRequest(ServiceUnitTypePriceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ServiceUnitTypePriceService = Transaction.ServiceUnitTypePriceService || (Transaction.ServiceUnitTypePriceService = {}));
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ServiceUnitTypeRow;
        (function (ServiceUnitTypeRow) {
            ServiceUnitTypeRow.idProperty = 'ServiceUnitTypeId';
            ServiceUnitTypeRow.nameProperty = 'ServiceUnitType';
            ServiceUnitTypeRow.localTextPrefix = 'Transaction.ServiceUnitType';
            ServiceUnitTypeRow.deletePermission = 'Administration:Transaction';
            ServiceUnitTypeRow.insertPermission = 'Administration:Transaction';
            ServiceUnitTypeRow.readPermission = 'Administration:Transaction';
            ServiceUnitTypeRow.updatePermission = 'Administration:Transaction';
        })(ServiceUnitTypeRow = Transaction.ServiceUnitTypeRow || (Transaction.ServiceUnitTypeRow = {}));
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ServiceUnitTypeService;
        (function (ServiceUnitTypeService) {
            ServiceUnitTypeService.baseUrl = 'Transaction/ServiceUnitType';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ServiceUnitTypeService[x] = function (r, s, o) {
                    return Q.serviceRequest(ServiceUnitTypeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ServiceUnitTypeService = Transaction.ServiceUnitTypeService || (Transaction.ServiceUnitTypeService = {}));
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = DIMSOnline.Administration || (DIMSOnline.Administration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = DIMSOnline.Administration || (DIMSOnline.Administration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = DIMSOnline.Administration || (DIMSOnline.Administration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = DIMSOnline.Administration || (DIMSOnline.Administration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = DIMSOnline.Administration || (DIMSOnline.Administration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = DIMSOnline.Administration || (DIMSOnline.Administration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = DIMSOnline.Administration || (DIMSOnline.Administration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = DIMSOnline.Administration || (DIMSOnline.Administration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = DIMSOnline.Authorization || (DIMSOnline.Authorization = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: false,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = DIMSOnline.Administration || (DIMSOnline.Administration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = DIMSOnline.Administration || (DIMSOnline.Administration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = DIMSOnline.Administration || (DIMSOnline.Administration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = DIMSOnline.Administration || (DIMSOnline.Administration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = DIMSOnline.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = DIMSOnline.LanguageList || (DIMSOnline.LanguageList = {}));
})(DIMSOnline || (DIMSOnline = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var DIMSOnline;
(function (DIMSOnline) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('DIMSOnline');
        Serenity.EntityDialog.defaultLanguageList = DIMSOnline.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = DIMSOnline.ScriptInitialization || (DIMSOnline.ScriptInitialization = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: false,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    DIMSOnline.BasicProgressDialog = BasicProgressDialog;
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new DIMSOnline.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = DIMSOnline.Common || (DIMSOnline.Common = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = DIMSOnline.DialogUtils || (DIMSOnline.DialogUtils = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = DIMSOnline.Common || (DIMSOnline.Common = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = DIMSOnline.Common || (DIMSOnline.Common = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: false,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase.prototype.enableDeleteColumn = function () {
                return false;
            };
            GridEditorBase.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (this.enableDeleteColumn()) {
                    columns.unshift({
                        field: 'Delete Row',
                        name: '',
                        format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                            '<i class="fa fa-trash-o text-red"></i></a>'; },
                        width: 24,
                        minWidth: 24,
                        maxWidth: 24
                    });
                }
                return columns;
            };
            GridEditorBase.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (this.enableDeleteColumn()) {
                        if (target.hasClass('delete-row')) {
                            Q.confirm(Q.text('Controls.EntityDialog.DeleteConfirmation'), function () {
                                _this.deleteEntity(item[_this.getIdProperty()]);
                            });
                        }
                    }
                }
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = DIMSOnline.Common || (DIMSOnline.Common = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = DIMSOnline.Common || (DIMSOnline.Common = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    DIMSOnline.StaticTextBlock = StaticTextBlock;
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = DIMSOnline.Common || (DIMSOnline.Common = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = DIMSOnline.Common || (DIMSOnline.Common = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                //DIMS
                Q.addOption(select, 'white', Q.text('Site.Layout.ThemeWhite'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = DIMSOnline.Common || (DIMSOnline.Common = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        if (output == 'datauri')
                            doc.output(output);
                        else {
                            var tmpOut = doc.output('datauristring');
                            if (output == 'dataurlnewwindow') {
                                var fileTmpName = options.reportTitle || g.getTitle();
                                var url_with_name = tmpOut.replace("data:application/pdf;", "data:application/pdf;name=" + fileTmpName + ".pdf;");
                                var html = '<html>' +
                                    '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
                                    '<body>' +
                                    '<p></p>' +
                                    '<iframe type="application/pdf" src="' + url_with_name + '"></iframe>' +
                                    '</body></html>';
                                var a = window.open("about:blank", "_blank");
                                a.document.write(html);
                                a.document.close();
                            }
                        }
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = DIMSOnline.Common || (DIMSOnline.Common = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = DIMSOnline.Common || (DIMSOnline.Common = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = DIMSOnline.Common || (DIMSOnline.Common = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = DIMSOnline.Common || (DIMSOnline.Common = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = DIMSOnline.Common || (DIMSOnline.Common = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var BinLocationDialog = /** @class */ (function (_super) {
            __extends(BinLocationDialog, _super);
            function BinLocationDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Configuration.BinLocationForm(_this.idPrefix);
                return _this;
            }
            BinLocationDialog.prototype.getFormKey = function () { return Configuration.BinLocationForm.formKey; };
            BinLocationDialog.prototype.getIdProperty = function () { return Configuration.BinLocationRow.idProperty; };
            BinLocationDialog.prototype.getLocalTextPrefix = function () { return Configuration.BinLocationRow.localTextPrefix; };
            BinLocationDialog.prototype.getNameProperty = function () { return Configuration.BinLocationRow.nameProperty; };
            BinLocationDialog.prototype.getService = function () { return Configuration.BinLocationService.baseUrl; };
            BinLocationDialog.prototype.getDeletePermission = function () { return Configuration.BinLocationRow.deletePermission; };
            BinLocationDialog.prototype.getInsertPermission = function () { return Configuration.BinLocationRow.insertPermission; };
            BinLocationDialog.prototype.getUpdatePermission = function () { return Configuration.BinLocationRow.updatePermission; };
            BinLocationDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BinLocationDialog);
            return BinLocationDialog;
        }(Serenity.EntityDialog));
        Configuration.BinLocationDialog = BinLocationDialog;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var BinLocationGrid = /** @class */ (function (_super) {
            __extends(BinLocationGrid, _super);
            function BinLocationGrid(container) {
                return _super.call(this, container) || this;
            }
            BinLocationGrid.prototype.getColumnsKey = function () { return 'Configuration.BinLocation'; };
            BinLocationGrid.prototype.getDialogType = function () { return Configuration.BinLocationDialog; };
            BinLocationGrid.prototype.getIdProperty = function () { return Configuration.BinLocationRow.idProperty; };
            BinLocationGrid.prototype.getInsertPermission = function () { return Configuration.BinLocationRow.insertPermission; };
            BinLocationGrid.prototype.getLocalTextPrefix = function () { return Configuration.BinLocationRow.localTextPrefix; };
            BinLocationGrid.prototype.getService = function () { return Configuration.BinLocationService.baseUrl; };
            BinLocationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BinLocationGrid);
            return BinLocationGrid;
        }(Serenity.EntityGrid));
        Configuration.BinLocationGrid = BinLocationGrid;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var CategoryUnitDialog = /** @class */ (function (_super) {
            __extends(CategoryUnitDialog, _super);
            function CategoryUnitDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Configuration.CategoryUnitForm(_this.idPrefix);
                return _this;
            }
            CategoryUnitDialog.prototype.getFormKey = function () { return Configuration.CategoryUnitForm.formKey; };
            CategoryUnitDialog.prototype.getIdProperty = function () { return Configuration.CategoryUnitRow.idProperty; };
            CategoryUnitDialog.prototype.getLocalTextPrefix = function () { return Configuration.CategoryUnitRow.localTextPrefix; };
            CategoryUnitDialog.prototype.getNameProperty = function () { return Configuration.CategoryUnitRow.nameProperty; };
            CategoryUnitDialog.prototype.getService = function () { return Configuration.CategoryUnitService.baseUrl; };
            CategoryUnitDialog.prototype.getDeletePermission = function () { return Configuration.CategoryUnitRow.deletePermission; };
            CategoryUnitDialog.prototype.getInsertPermission = function () { return Configuration.CategoryUnitRow.insertPermission; };
            CategoryUnitDialog.prototype.getUpdatePermission = function () { return Configuration.CategoryUnitRow.updatePermission; };
            CategoryUnitDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryUnitDialog);
            return CategoryUnitDialog;
        }(Serenity.EntityDialog));
        Configuration.CategoryUnitDialog = CategoryUnitDialog;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var CategoryUnitGrid = /** @class */ (function (_super) {
            __extends(CategoryUnitGrid, _super);
            function CategoryUnitGrid(container) {
                return _super.call(this, container) || this;
            }
            CategoryUnitGrid.prototype.getColumnsKey = function () { return 'Configuration.CategoryUnit'; };
            CategoryUnitGrid.prototype.getDialogType = function () { return Configuration.CategoryUnitDialog; };
            CategoryUnitGrid.prototype.getIdProperty = function () { return Configuration.CategoryUnitRow.idProperty; };
            CategoryUnitGrid.prototype.getInsertPermission = function () { return Configuration.CategoryUnitRow.insertPermission; };
            CategoryUnitGrid.prototype.getLocalTextPrefix = function () { return Configuration.CategoryUnitRow.localTextPrefix; };
            CategoryUnitGrid.prototype.getService = function () { return Configuration.CategoryUnitService.baseUrl; };
            CategoryUnitGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryUnitGrid);
            return CategoryUnitGrid;
        }(Serenity.EntityGrid));
        Configuration.CategoryUnitGrid = CategoryUnitGrid;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var CityDialog = /** @class */ (function (_super) {
            __extends(CityDialog, _super);
            function CityDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Configuration.CityForm(_this.idPrefix);
                return _this;
            }
            CityDialog.prototype.getFormKey = function () { return Configuration.CityForm.formKey; };
            CityDialog.prototype.getIdProperty = function () { return Configuration.CityRow.idProperty; };
            CityDialog.prototype.getLocalTextPrefix = function () { return Configuration.CityRow.localTextPrefix; };
            CityDialog.prototype.getNameProperty = function () { return Configuration.CityRow.nameProperty; };
            CityDialog.prototype.getService = function () { return Configuration.CityService.baseUrl; };
            CityDialog.prototype.getDeletePermission = function () { return Configuration.CityRow.deletePermission; };
            CityDialog.prototype.getInsertPermission = function () { return Configuration.CityRow.insertPermission; };
            CityDialog.prototype.getUpdatePermission = function () { return Configuration.CityRow.updatePermission; };
            CityDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CityDialog);
            return CityDialog;
        }(Serenity.EntityDialog));
        Configuration.CityDialog = CityDialog;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var CityGrid = /** @class */ (function (_super) {
            __extends(CityGrid, _super);
            function CityGrid(container) {
                return _super.call(this, container) || this;
            }
            CityGrid.prototype.getColumnsKey = function () { return 'Configuration.City'; };
            CityGrid.prototype.getDialogType = function () { return Configuration.CityDialog; };
            CityGrid.prototype.getIdProperty = function () { return Configuration.CityRow.idProperty; };
            CityGrid.prototype.getInsertPermission = function () { return Configuration.CityRow.insertPermission; };
            CityGrid.prototype.getLocalTextPrefix = function () { return Configuration.CityRow.localTextPrefix; };
            CityGrid.prototype.getService = function () { return Configuration.CityService.baseUrl; };
            CityGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CityGrid);
            return CityGrid;
        }(Serenity.EntityGrid));
        Configuration.CityGrid = CityGrid;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var CompanyDialog = /** @class */ (function (_super) {
            __extends(CompanyDialog, _super);
            function CompanyDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Configuration.CompanyForm(_this.idPrefix);
                return _this;
            }
            CompanyDialog.prototype.getFormKey = function () { return Configuration.CompanyForm.formKey; };
            CompanyDialog.prototype.getIdProperty = function () { return Configuration.CompanyRow.idProperty; };
            CompanyDialog.prototype.getLocalTextPrefix = function () { return Configuration.CompanyRow.localTextPrefix; };
            CompanyDialog.prototype.getNameProperty = function () { return Configuration.CompanyRow.nameProperty; };
            CompanyDialog.prototype.getService = function () { return Configuration.CompanyService.baseUrl; };
            CompanyDialog.prototype.getDeletePermission = function () { return Configuration.CompanyRow.deletePermission; };
            CompanyDialog.prototype.getInsertPermission = function () { return Configuration.CompanyRow.insertPermission; };
            CompanyDialog.prototype.getUpdatePermission = function () { return Configuration.CompanyRow.updatePermission; };
            CompanyDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CompanyDialog);
            return CompanyDialog;
        }(Serenity.EntityDialog));
        Configuration.CompanyDialog = CompanyDialog;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var CompanyGrid = /** @class */ (function (_super) {
            __extends(CompanyGrid, _super);
            function CompanyGrid(container) {
                return _super.call(this, container) || this;
            }
            CompanyGrid.prototype.getColumnsKey = function () { return 'Configuration.Company'; };
            CompanyGrid.prototype.getDialogType = function () { return Configuration.CompanyDialog; };
            CompanyGrid.prototype.getIdProperty = function () { return Configuration.CompanyRow.idProperty; };
            CompanyGrid.prototype.getInsertPermission = function () { return Configuration.CompanyRow.insertPermission; };
            CompanyGrid.prototype.getLocalTextPrefix = function () { return Configuration.CompanyRow.localTextPrefix; };
            CompanyGrid.prototype.getService = function () { return Configuration.CompanyService.baseUrl; };
            CompanyGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CompanyGrid);
            return CompanyGrid;
        }(Serenity.EntityGrid));
        Configuration.CompanyGrid = CompanyGrid;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var CustomerDialog = /** @class */ (function (_super) {
            __extends(CustomerDialog, _super);
            function CustomerDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Configuration.CustomerForm(_this.idPrefix);
                return _this;
            }
            CustomerDialog.prototype.getFormKey = function () { return Configuration.CustomerForm.formKey; };
            CustomerDialog.prototype.getIdProperty = function () { return Configuration.CustomerRow.idProperty; };
            CustomerDialog.prototype.getLocalTextPrefix = function () { return Configuration.CustomerRow.localTextPrefix; };
            CustomerDialog.prototype.getNameProperty = function () { return Configuration.CustomerRow.nameProperty; };
            CustomerDialog.prototype.getService = function () { return Configuration.CustomerService.baseUrl; };
            CustomerDialog.prototype.getDeletePermission = function () { return Configuration.CustomerRow.deletePermission; };
            CustomerDialog.prototype.getInsertPermission = function () { return Configuration.CustomerRow.insertPermission; };
            CustomerDialog.prototype.getUpdatePermission = function () { return Configuration.CustomerRow.updatePermission; };
            CustomerDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerDialog);
            return CustomerDialog;
        }(Serenity.EntityDialog));
        Configuration.CustomerDialog = CustomerDialog;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var CustomerGrid = /** @class */ (function (_super) {
            __extends(CustomerGrid, _super);
            function CustomerGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerGrid.prototype.getColumnsKey = function () { return 'Configuration.Customer'; };
            CustomerGrid.prototype.getDialogType = function () { return Configuration.CustomerDialog; };
            CustomerGrid.prototype.getIdProperty = function () { return Configuration.CustomerRow.idProperty; };
            CustomerGrid.prototype.getInsertPermission = function () { return Configuration.CustomerRow.insertPermission; };
            CustomerGrid.prototype.getLocalTextPrefix = function () { return Configuration.CustomerRow.localTextPrefix; };
            CustomerGrid.prototype.getService = function () { return Configuration.CustomerService.baseUrl; };
            CustomerGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerGrid);
            return CustomerGrid;
        }(Serenity.EntityGrid));
        Configuration.CustomerGrid = CustomerGrid;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var IslandDialog = /** @class */ (function (_super) {
            __extends(IslandDialog, _super);
            function IslandDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Configuration.IslandForm(_this.idPrefix);
                return _this;
            }
            IslandDialog.prototype.getFormKey = function () { return Configuration.IslandForm.formKey; };
            IslandDialog.prototype.getIdProperty = function () { return Configuration.IslandRow.idProperty; };
            IslandDialog.prototype.getLocalTextPrefix = function () { return Configuration.IslandRow.localTextPrefix; };
            IslandDialog.prototype.getNameProperty = function () { return Configuration.IslandRow.nameProperty; };
            IslandDialog.prototype.getService = function () { return Configuration.IslandService.baseUrl; };
            IslandDialog.prototype.getDeletePermission = function () { return Configuration.IslandRow.deletePermission; };
            IslandDialog.prototype.getInsertPermission = function () { return Configuration.IslandRow.insertPermission; };
            IslandDialog.prototype.getUpdatePermission = function () { return Configuration.IslandRow.updatePermission; };
            IslandDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], IslandDialog);
            return IslandDialog;
        }(Serenity.EntityDialog));
        Configuration.IslandDialog = IslandDialog;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var IslandGrid = /** @class */ (function (_super) {
            __extends(IslandGrid, _super);
            function IslandGrid(container) {
                return _super.call(this, container) || this;
            }
            IslandGrid.prototype.getColumnsKey = function () { return 'Configuration.Island'; };
            IslandGrid.prototype.getDialogType = function () { return Configuration.IslandDialog; };
            IslandGrid.prototype.getIdProperty = function () { return Configuration.IslandRow.idProperty; };
            IslandGrid.prototype.getInsertPermission = function () { return Configuration.IslandRow.insertPermission; };
            IslandGrid.prototype.getLocalTextPrefix = function () { return Configuration.IslandRow.localTextPrefix; };
            IslandGrid.prototype.getService = function () { return Configuration.IslandService.baseUrl; };
            IslandGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], IslandGrid);
            return IslandGrid;
        }(Serenity.EntityGrid));
        Configuration.IslandGrid = IslandGrid;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var MovementTypeDialog = /** @class */ (function (_super) {
            __extends(MovementTypeDialog, _super);
            function MovementTypeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Configuration.MovementTypeForm(_this.idPrefix);
                return _this;
            }
            MovementTypeDialog.prototype.getFormKey = function () { return Configuration.MovementTypeForm.formKey; };
            MovementTypeDialog.prototype.getIdProperty = function () { return Configuration.MovementTypeRow.idProperty; };
            MovementTypeDialog.prototype.getLocalTextPrefix = function () { return Configuration.MovementTypeRow.localTextPrefix; };
            MovementTypeDialog.prototype.getNameProperty = function () { return Configuration.MovementTypeRow.nameProperty; };
            MovementTypeDialog.prototype.getService = function () { return Configuration.MovementTypeService.baseUrl; };
            MovementTypeDialog.prototype.getDeletePermission = function () { return Configuration.MovementTypeRow.deletePermission; };
            MovementTypeDialog.prototype.getInsertPermission = function () { return Configuration.MovementTypeRow.insertPermission; };
            MovementTypeDialog.prototype.getUpdatePermission = function () { return Configuration.MovementTypeRow.updatePermission; };
            MovementTypeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MovementTypeDialog);
            return MovementTypeDialog;
        }(Serenity.EntityDialog));
        Configuration.MovementTypeDialog = MovementTypeDialog;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var MovementTypeGrid = /** @class */ (function (_super) {
            __extends(MovementTypeGrid, _super);
            function MovementTypeGrid(container) {
                return _super.call(this, container) || this;
            }
            MovementTypeGrid.prototype.getColumnsKey = function () { return 'Configuration.MovementType'; };
            MovementTypeGrid.prototype.getDialogType = function () { return Configuration.MovementTypeDialog; };
            MovementTypeGrid.prototype.getIdProperty = function () { return Configuration.MovementTypeRow.idProperty; };
            MovementTypeGrid.prototype.getInsertPermission = function () { return Configuration.MovementTypeRow.insertPermission; };
            MovementTypeGrid.prototype.getLocalTextPrefix = function () { return Configuration.MovementTypeRow.localTextPrefix; };
            MovementTypeGrid.prototype.getService = function () { return Configuration.MovementTypeService.baseUrl; };
            MovementTypeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MovementTypeGrid);
            return MovementTypeGrid;
        }(Serenity.EntityGrid));
        Configuration.MovementTypeGrid = MovementTypeGrid;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var OrderCategoryDialog = /** @class */ (function (_super) {
            __extends(OrderCategoryDialog, _super);
            function OrderCategoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Configuration.OrderCategoryForm(_this.idPrefix);
                return _this;
            }
            OrderCategoryDialog.prototype.getFormKey = function () { return Configuration.OrderCategoryForm.formKey; };
            OrderCategoryDialog.prototype.getIdProperty = function () { return Configuration.OrderCategoryRow.idProperty; };
            OrderCategoryDialog.prototype.getLocalTextPrefix = function () { return Configuration.OrderCategoryRow.localTextPrefix; };
            OrderCategoryDialog.prototype.getNameProperty = function () { return Configuration.OrderCategoryRow.nameProperty; };
            OrderCategoryDialog.prototype.getService = function () { return Configuration.OrderCategoryService.baseUrl; };
            OrderCategoryDialog.prototype.getDeletePermission = function () { return Configuration.OrderCategoryRow.deletePermission; };
            OrderCategoryDialog.prototype.getInsertPermission = function () { return Configuration.OrderCategoryRow.insertPermission; };
            OrderCategoryDialog.prototype.getUpdatePermission = function () { return Configuration.OrderCategoryRow.updatePermission; };
            OrderCategoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderCategoryDialog);
            return OrderCategoryDialog;
        }(Serenity.EntityDialog));
        Configuration.OrderCategoryDialog = OrderCategoryDialog;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var OrderCategoryGrid = /** @class */ (function (_super) {
            __extends(OrderCategoryGrid, _super);
            function OrderCategoryGrid(container) {
                return _super.call(this, container) || this;
            }
            OrderCategoryGrid.prototype.getColumnsKey = function () { return 'Configuration.OrderCategory'; };
            OrderCategoryGrid.prototype.getDialogType = function () { return Configuration.OrderCategoryDialog; };
            OrderCategoryGrid.prototype.getIdProperty = function () { return Configuration.OrderCategoryRow.idProperty; };
            OrderCategoryGrid.prototype.getInsertPermission = function () { return Configuration.OrderCategoryRow.insertPermission; };
            OrderCategoryGrid.prototype.getLocalTextPrefix = function () { return Configuration.OrderCategoryRow.localTextPrefix; };
            OrderCategoryGrid.prototype.getService = function () { return Configuration.OrderCategoryService.baseUrl; };
            OrderCategoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderCategoryGrid);
            return OrderCategoryGrid;
        }(Serenity.EntityGrid));
        Configuration.OrderCategoryGrid = OrderCategoryGrid;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProductAlternativeDialog = /** @class */ (function (_super) {
            __extends(ProductAlternativeDialog, _super);
            function ProductAlternativeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Configuration.ProductAlternativeForm(_this.idPrefix);
                return _this;
            }
            ProductAlternativeDialog.prototype.getFormKey = function () { return Configuration.ProductAlternativeForm.formKey; };
            ProductAlternativeDialog.prototype.getIdProperty = function () { return Configuration.ProductAlternativeRow.idProperty; };
            ProductAlternativeDialog.prototype.getLocalTextPrefix = function () { return Configuration.ProductAlternativeRow.localTextPrefix; };
            ProductAlternativeDialog.prototype.getService = function () { return Configuration.ProductAlternativeService.baseUrl; };
            ProductAlternativeDialog.prototype.getDeletePermission = function () { return Configuration.ProductAlternativeRow.deletePermission; };
            ProductAlternativeDialog.prototype.getInsertPermission = function () { return Configuration.ProductAlternativeRow.insertPermission; };
            ProductAlternativeDialog.prototype.getUpdatePermission = function () { return Configuration.ProductAlternativeRow.updatePermission; };
            ProductAlternativeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductAlternativeDialog);
            return ProductAlternativeDialog;
        }(Serenity.EntityDialog));
        Configuration.ProductAlternativeDialog = ProductAlternativeDialog;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProductAlternativeGrid = /** @class */ (function (_super) {
            __extends(ProductAlternativeGrid, _super);
            function ProductAlternativeGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductAlternativeGrid.prototype.getColumnsKey = function () { return 'Configuration.ProductAlternative'; };
            ProductAlternativeGrid.prototype.getDialogType = function () { return Configuration.ProductAlternativeDialog; };
            ProductAlternativeGrid.prototype.getIdProperty = function () { return Configuration.ProductAlternativeRow.idProperty; };
            ProductAlternativeGrid.prototype.getInsertPermission = function () { return Configuration.ProductAlternativeRow.insertPermission; };
            ProductAlternativeGrid.prototype.getLocalTextPrefix = function () { return Configuration.ProductAlternativeRow.localTextPrefix; };
            ProductAlternativeGrid.prototype.getService = function () { return Configuration.ProductAlternativeService.baseUrl; };
            ProductAlternativeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductAlternativeGrid);
            return ProductAlternativeGrid;
        }(Serenity.EntityGrid));
        Configuration.ProductAlternativeGrid = ProductAlternativeGrid;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProductBasePriceDialog = /** @class */ (function (_super) {
            __extends(ProductBasePriceDialog, _super);
            function ProductBasePriceDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Configuration.ProductBasePriceForm(_this.idPrefix);
                return _this;
            }
            ProductBasePriceDialog.prototype.getFormKey = function () { return Configuration.ProductBasePriceForm.formKey; };
            ProductBasePriceDialog.prototype.getIdProperty = function () { return Configuration.ProductBasePriceRow.idProperty; };
            ProductBasePriceDialog.prototype.getLocalTextPrefix = function () { return Configuration.ProductBasePriceRow.localTextPrefix; };
            ProductBasePriceDialog.prototype.getNameProperty = function () { return Configuration.ProductBasePriceRow.nameProperty; };
            ProductBasePriceDialog.prototype.getService = function () { return Configuration.ProductBasePriceService.baseUrl; };
            ProductBasePriceDialog.prototype.getDeletePermission = function () { return Configuration.ProductBasePriceRow.deletePermission; };
            ProductBasePriceDialog.prototype.getInsertPermission = function () { return Configuration.ProductBasePriceRow.insertPermission; };
            ProductBasePriceDialog.prototype.getUpdatePermission = function () { return Configuration.ProductBasePriceRow.updatePermission; };
            ProductBasePriceDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductBasePriceDialog);
            return ProductBasePriceDialog;
        }(Serenity.EntityDialog));
        Configuration.ProductBasePriceDialog = ProductBasePriceDialog;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProductBasePriceGrid = /** @class */ (function (_super) {
            __extends(ProductBasePriceGrid, _super);
            function ProductBasePriceGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductBasePriceGrid.prototype.getColumnsKey = function () { return 'Configuration.ProductBasePrice'; };
            ProductBasePriceGrid.prototype.getDialogType = function () { return Configuration.ProductBasePriceDialog; };
            ProductBasePriceGrid.prototype.getIdProperty = function () { return Configuration.ProductBasePriceRow.idProperty; };
            ProductBasePriceGrid.prototype.getInsertPermission = function () { return Configuration.ProductBasePriceRow.insertPermission; };
            ProductBasePriceGrid.prototype.getLocalTextPrefix = function () { return Configuration.ProductBasePriceRow.localTextPrefix; };
            ProductBasePriceGrid.prototype.getService = function () { return Configuration.ProductBasePriceService.baseUrl; };
            ProductBasePriceGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductBasePriceGrid);
            return ProductBasePriceGrid;
        }(Serenity.EntityGrid));
        Configuration.ProductBasePriceGrid = ProductBasePriceGrid;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProductPriceDialog = /** @class */ (function (_super) {
            __extends(ProductPriceDialog, _super);
            function ProductPriceDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Configuration.ProductPriceForm(_this.idPrefix);
                return _this;
            }
            ProductPriceDialog.prototype.getFormKey = function () { return Configuration.ProductPriceForm.formKey; };
            ProductPriceDialog.prototype.getIdProperty = function () { return Configuration.ProductPriceRow.idProperty; };
            ProductPriceDialog.prototype.getLocalTextPrefix = function () { return Configuration.ProductPriceRow.localTextPrefix; };
            ProductPriceDialog.prototype.getNameProperty = function () { return Configuration.ProductPriceRow.nameProperty; };
            ProductPriceDialog.prototype.getService = function () { return Configuration.ProductPriceService.baseUrl; };
            ProductPriceDialog.prototype.getDeletePermission = function () { return Configuration.ProductPriceRow.deletePermission; };
            ProductPriceDialog.prototype.getInsertPermission = function () { return Configuration.ProductPriceRow.insertPermission; };
            ProductPriceDialog.prototype.getUpdatePermission = function () { return Configuration.ProductPriceRow.updatePermission; };
            ProductPriceDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductPriceDialog);
            return ProductPriceDialog;
        }(Serenity.EntityDialog));
        Configuration.ProductPriceDialog = ProductPriceDialog;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProductPriceGrid = /** @class */ (function (_super) {
            __extends(ProductPriceGrid, _super);
            function ProductPriceGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductPriceGrid.prototype.getColumnsKey = function () { return 'Configuration.ProductPrice'; };
            ProductPriceGrid.prototype.getDialogType = function () { return Configuration.ProductPriceDialog; };
            ProductPriceGrid.prototype.getIdProperty = function () { return Configuration.ProductPriceRow.idProperty; };
            ProductPriceGrid.prototype.getInsertPermission = function () { return Configuration.ProductPriceRow.insertPermission; };
            ProductPriceGrid.prototype.getLocalTextPrefix = function () { return Configuration.ProductPriceRow.localTextPrefix; };
            ProductPriceGrid.prototype.getService = function () { return Configuration.ProductPriceService.baseUrl; };
            ProductPriceGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductPriceGrid);
            return ProductPriceGrid;
        }(Serenity.EntityGrid));
        Configuration.ProductPriceGrid = ProductPriceGrid;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProductTypeDialog = /** @class */ (function (_super) {
            __extends(ProductTypeDialog, _super);
            function ProductTypeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Configuration.ProductTypeForm(_this.idPrefix);
                return _this;
            }
            ProductTypeDialog.prototype.getFormKey = function () { return Configuration.ProductTypeForm.formKey; };
            ProductTypeDialog.prototype.getIdProperty = function () { return Configuration.ProductTypeRow.idProperty; };
            ProductTypeDialog.prototype.getLocalTextPrefix = function () { return Configuration.ProductTypeRow.localTextPrefix; };
            ProductTypeDialog.prototype.getNameProperty = function () { return Configuration.ProductTypeRow.nameProperty; };
            ProductTypeDialog.prototype.getService = function () { return Configuration.ProductTypeService.baseUrl; };
            ProductTypeDialog.prototype.getDeletePermission = function () { return Configuration.ProductTypeRow.deletePermission; };
            ProductTypeDialog.prototype.getInsertPermission = function () { return Configuration.ProductTypeRow.insertPermission; };
            ProductTypeDialog.prototype.getUpdatePermission = function () { return Configuration.ProductTypeRow.updatePermission; };
            ProductTypeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductTypeDialog);
            return ProductTypeDialog;
        }(Serenity.EntityDialog));
        Configuration.ProductTypeDialog = ProductTypeDialog;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProductTypeGrid = /** @class */ (function (_super) {
            __extends(ProductTypeGrid, _super);
            function ProductTypeGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductTypeGrid.prototype.getColumnsKey = function () { return 'Configuration.ProductType'; };
            ProductTypeGrid.prototype.getDialogType = function () { return Configuration.ProductTypeDialog; };
            ProductTypeGrid.prototype.getIdProperty = function () { return Configuration.ProductTypeRow.idProperty; };
            ProductTypeGrid.prototype.getInsertPermission = function () { return Configuration.ProductTypeRow.insertPermission; };
            ProductTypeGrid.prototype.getLocalTextPrefix = function () { return Configuration.ProductTypeRow.localTextPrefix; };
            ProductTypeGrid.prototype.getService = function () { return Configuration.ProductTypeService.baseUrl; };
            ProductTypeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductTypeGrid);
            return ProductTypeGrid;
        }(Serenity.EntityGrid));
        Configuration.ProductTypeGrid = ProductTypeGrid;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProductsDialog = /** @class */ (function (_super) {
            __extends(ProductsDialog, _super);
            function ProductsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Configuration.ProductsForm(_this.idPrefix);
                return _this;
            }
            ProductsDialog.prototype.getFormKey = function () { return Configuration.ProductsForm.formKey; };
            ProductsDialog.prototype.getIdProperty = function () { return Configuration.ProductsRow.idProperty; };
            ProductsDialog.prototype.getLocalTextPrefix = function () { return Configuration.ProductsRow.localTextPrefix; };
            ProductsDialog.prototype.getNameProperty = function () { return Configuration.ProductsRow.nameProperty; };
            ProductsDialog.prototype.getService = function () { return Configuration.ProductsService.baseUrl; };
            ProductsDialog.prototype.getDeletePermission = function () { return Configuration.ProductsRow.deletePermission; };
            ProductsDialog.prototype.getInsertPermission = function () { return Configuration.ProductsRow.insertPermission; };
            ProductsDialog.prototype.getUpdatePermission = function () { return Configuration.ProductsRow.updatePermission; };
            ProductsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductsDialog);
            return ProductsDialog;
        }(Serenity.EntityDialog));
        Configuration.ProductsDialog = ProductsDialog;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProductsGrid = /** @class */ (function (_super) {
            __extends(ProductsGrid, _super);
            function ProductsGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductsGrid.prototype.getColumnsKey = function () { return 'Configuration.Products'; };
            ProductsGrid.prototype.getDialogType = function () { return Configuration.ProductsDialog; };
            ProductsGrid.prototype.getIdProperty = function () { return Configuration.ProductsRow.idProperty; };
            ProductsGrid.prototype.getInsertPermission = function () { return Configuration.ProductsRow.insertPermission; };
            ProductsGrid.prototype.getLocalTextPrefix = function () { return Configuration.ProductsRow.localTextPrefix; };
            ProductsGrid.prototype.getService = function () { return Configuration.ProductsService.baseUrl; };
            ProductsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductsGrid);
            return ProductsGrid;
        }(Serenity.EntityGrid));
        Configuration.ProductsGrid = ProductsGrid;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProductsLogDialog = /** @class */ (function (_super) {
            __extends(ProductsLogDialog, _super);
            function ProductsLogDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Configuration.ProductsLogForm(_this.idPrefix);
                return _this;
            }
            ProductsLogDialog.prototype.getFormKey = function () { return Configuration.ProductsLogForm.formKey; };
            ProductsLogDialog.prototype.getIdProperty = function () { return Configuration.ProductsLogRow.idProperty; };
            ProductsLogDialog.prototype.getLocalTextPrefix = function () { return Configuration.ProductsLogRow.localTextPrefix; };
            ProductsLogDialog.prototype.getNameProperty = function () { return Configuration.ProductsLogRow.nameProperty; };
            ProductsLogDialog.prototype.getService = function () { return Configuration.ProductsLogService.baseUrl; };
            ProductsLogDialog.prototype.getDeletePermission = function () { return Configuration.ProductsLogRow.deletePermission; };
            ProductsLogDialog.prototype.getInsertPermission = function () { return Configuration.ProductsLogRow.insertPermission; };
            ProductsLogDialog.prototype.getUpdatePermission = function () { return Configuration.ProductsLogRow.updatePermission; };
            ProductsLogDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductsLogDialog);
            return ProductsLogDialog;
        }(Serenity.EntityDialog));
        Configuration.ProductsLogDialog = ProductsLogDialog;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProductsLogGrid = /** @class */ (function (_super) {
            __extends(ProductsLogGrid, _super);
            function ProductsLogGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductsLogGrid.prototype.getColumnsKey = function () { return 'Configuration.ProductsLog'; };
            ProductsLogGrid.prototype.getDialogType = function () { return Configuration.ProductsLogDialog; };
            ProductsLogGrid.prototype.getIdProperty = function () { return Configuration.ProductsLogRow.idProperty; };
            ProductsLogGrid.prototype.getInsertPermission = function () { return Configuration.ProductsLogRow.insertPermission; };
            ProductsLogGrid.prototype.getLocalTextPrefix = function () { return Configuration.ProductsLogRow.localTextPrefix; };
            ProductsLogGrid.prototype.getService = function () { return Configuration.ProductsLogService.baseUrl; };
            ProductsLogGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductsLogGrid);
            return ProductsLogGrid;
        }(Serenity.EntityGrid));
        Configuration.ProductsLogGrid = ProductsLogGrid;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProvinceDialog = /** @class */ (function (_super) {
            __extends(ProvinceDialog, _super);
            function ProvinceDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Configuration.ProvinceForm(_this.idPrefix);
                return _this;
            }
            ProvinceDialog.prototype.getFormKey = function () { return Configuration.ProvinceForm.formKey; };
            ProvinceDialog.prototype.getIdProperty = function () { return Configuration.ProvinceRow.idProperty; };
            ProvinceDialog.prototype.getLocalTextPrefix = function () { return Configuration.ProvinceRow.localTextPrefix; };
            ProvinceDialog.prototype.getNameProperty = function () { return Configuration.ProvinceRow.nameProperty; };
            ProvinceDialog.prototype.getService = function () { return Configuration.ProvinceService.baseUrl; };
            ProvinceDialog.prototype.getDeletePermission = function () { return Configuration.ProvinceRow.deletePermission; };
            ProvinceDialog.prototype.getInsertPermission = function () { return Configuration.ProvinceRow.insertPermission; };
            ProvinceDialog.prototype.getUpdatePermission = function () { return Configuration.ProvinceRow.updatePermission; };
            ProvinceDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProvinceDialog);
            return ProvinceDialog;
        }(Serenity.EntityDialog));
        Configuration.ProvinceDialog = ProvinceDialog;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var ProvinceGrid = /** @class */ (function (_super) {
            __extends(ProvinceGrid, _super);
            function ProvinceGrid(container) {
                return _super.call(this, container) || this;
            }
            ProvinceGrid.prototype.getColumnsKey = function () { return 'Configuration.Province'; };
            ProvinceGrid.prototype.getDialogType = function () { return Configuration.ProvinceDialog; };
            ProvinceGrid.prototype.getIdProperty = function () { return Configuration.ProvinceRow.idProperty; };
            ProvinceGrid.prototype.getInsertPermission = function () { return Configuration.ProvinceRow.insertPermission; };
            ProvinceGrid.prototype.getLocalTextPrefix = function () { return Configuration.ProvinceRow.localTextPrefix; };
            ProvinceGrid.prototype.getService = function () { return Configuration.ProvinceService.baseUrl; };
            ProvinceGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProvinceGrid);
            return ProvinceGrid;
        }(Serenity.EntityGrid));
        Configuration.ProvinceGrid = ProvinceGrid;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var SupplierDialog = /** @class */ (function (_super) {
            __extends(SupplierDialog, _super);
            function SupplierDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Configuration.SupplierForm(_this.idPrefix);
                return _this;
            }
            SupplierDialog.prototype.getFormKey = function () { return Configuration.SupplierForm.formKey; };
            SupplierDialog.prototype.getIdProperty = function () { return Configuration.SupplierRow.idProperty; };
            SupplierDialog.prototype.getLocalTextPrefix = function () { return Configuration.SupplierRow.localTextPrefix; };
            SupplierDialog.prototype.getNameProperty = function () { return Configuration.SupplierRow.nameProperty; };
            SupplierDialog.prototype.getService = function () { return Configuration.SupplierService.baseUrl; };
            SupplierDialog.prototype.getDeletePermission = function () { return Configuration.SupplierRow.deletePermission; };
            SupplierDialog.prototype.getInsertPermission = function () { return Configuration.SupplierRow.insertPermission; };
            SupplierDialog.prototype.getUpdatePermission = function () { return Configuration.SupplierRow.updatePermission; };
            SupplierDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierDialog);
            return SupplierDialog;
        }(Serenity.EntityDialog));
        Configuration.SupplierDialog = SupplierDialog;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var SupplierGrid = /** @class */ (function (_super) {
            __extends(SupplierGrid, _super);
            function SupplierGrid(container) {
                return _super.call(this, container) || this;
            }
            SupplierGrid.prototype.getColumnsKey = function () { return 'Configuration.Supplier'; };
            SupplierGrid.prototype.getDialogType = function () { return Configuration.SupplierDialog; };
            SupplierGrid.prototype.getIdProperty = function () { return Configuration.SupplierRow.idProperty; };
            SupplierGrid.prototype.getInsertPermission = function () { return Configuration.SupplierRow.insertPermission; };
            SupplierGrid.prototype.getLocalTextPrefix = function () { return Configuration.SupplierRow.localTextPrefix; };
            SupplierGrid.prototype.getService = function () { return Configuration.SupplierService.baseUrl; };
            SupplierGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierGrid);
            return SupplierGrid;
        }(Serenity.EntityGrid));
        Configuration.SupplierGrid = SupplierGrid;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var UnitStockDialog = /** @class */ (function (_super) {
            __extends(UnitStockDialog, _super);
            function UnitStockDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Configuration.UnitStockForm(_this.idPrefix);
                return _this;
            }
            UnitStockDialog.prototype.getFormKey = function () { return Configuration.UnitStockForm.formKey; };
            UnitStockDialog.prototype.getIdProperty = function () { return Configuration.UnitStockRow.idProperty; };
            UnitStockDialog.prototype.getLocalTextPrefix = function () { return Configuration.UnitStockRow.localTextPrefix; };
            UnitStockDialog.prototype.getNameProperty = function () { return Configuration.UnitStockRow.nameProperty; };
            UnitStockDialog.prototype.getService = function () { return Configuration.UnitStockService.baseUrl; };
            UnitStockDialog.prototype.getDeletePermission = function () { return Configuration.UnitStockRow.deletePermission; };
            UnitStockDialog.prototype.getInsertPermission = function () { return Configuration.UnitStockRow.insertPermission; };
            UnitStockDialog.prototype.getUpdatePermission = function () { return Configuration.UnitStockRow.updatePermission; };
            UnitStockDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UnitStockDialog);
            return UnitStockDialog;
        }(Serenity.EntityDialog));
        Configuration.UnitStockDialog = UnitStockDialog;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Configuration;
    (function (Configuration) {
        var UnitStockGrid = /** @class */ (function (_super) {
            __extends(UnitStockGrid, _super);
            function UnitStockGrid(container) {
                return _super.call(this, container) || this;
            }
            UnitStockGrid.prototype.getColumnsKey = function () { return 'Configuration.UnitStock'; };
            UnitStockGrid.prototype.getDialogType = function () { return Configuration.UnitStockDialog; };
            UnitStockGrid.prototype.getIdProperty = function () { return Configuration.UnitStockRow.idProperty; };
            UnitStockGrid.prototype.getInsertPermission = function () { return Configuration.UnitStockRow.insertPermission; };
            UnitStockGrid.prototype.getLocalTextPrefix = function () { return Configuration.UnitStockRow.localTextPrefix; };
            UnitStockGrid.prototype.getService = function () { return Configuration.UnitStockService.baseUrl; };
            UnitStockGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UnitStockGrid);
            return UnitStockGrid;
        }(Serenity.EntityGrid));
        Configuration.UnitStockGrid = UnitStockGrid;
    })(Configuration = DIMSOnline.Configuration || (DIMSOnline.Configuration = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Membership;
    (function (Membership) {
        var LoginPanel = /** @class */ (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                $.fn['vegas'] && $('body')['vegas']({
                    delay: 30000,
                    cover: true,
                    overlay: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA3NCSVQICAjb4U" +
                        "/gAAAABlBMVEX///8AAABVwtN+AAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAAAsQAAALEAVuRnQsAAAAWdEVYdENyZWF0" +
                        "aW9uIFRpbWUAMDQvMTMvMTGrW0T6AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAAAxJREFUCJljaGBgAAABhACBrONIPgAAAABJRU5ErkJggg==",
                    /*overlay: Q.resolveUrl("~/Content/site/slides/traktor.jpeg"),*/
                    slides: [
                        { src: Q.resolveUrl("~/Content/site/slides/traktor.jpeg"), transition: 'fade' },
                        { src: Q.resolveUrl("~/Content/site/slides/traktor.jpeg"), transition: 'zoomOut' },
                        { src: Q.resolveUrl("~/Content/site/slides/traktor.jpeg"), transition: 'swirlLeft' }
                    ]
                });
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            _this.redirectToReturnUrl();
                        },
                        onError: function (response) {
                            if (response != null && response.Error != null && response.Error.Code == "RedirectUserTo") {
                                window.location.href = response.Error.Arguments;
                                return;
                            }
                            if (response != null && response.Error != null && !Q.isEmptyOrNull(response.Error.Message)) {
                                Q.notifyError(response.Error.Message);
                                $('#Password').focus();
                                return;
                            }
                            Q.ErrorHandling.showServiceError(response.Error);
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel.prototype.redirectToReturnUrl = function () {
                var q = Q.parseQueryString();
                var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                if (returnUrl) {
                    var hash = window.location.hash;
                    if (hash != null && hash != '#')
                        returnUrl += hash;
                    window.location.href = returnUrl;
                }
                else {
                    window.location.href = Q.resolveUrl('~/');
                }
            };
            LoginPanel.prototype.getTemplate = function () {
                return "\n<div class=\"flex-layout\">\n    <div class=\"logo\"></div>\n    <h3>" + Q.text("Forms.Membership.Login.FormTitle") + "</h3>\n    <form id=\"~_Form\" action=\"\">\n        <div class=\"s-Form\">\n            <div class=\"fieldset ui-widget ui-widget-content ui-corner-all\">\n                <div id=\"~_PropertyGrid\"></div>\n                <div class=\"clear\"></div>\n            </div>\n            <div class=\"buttons\">\n                <button id=\"~_LoginButton\" type=\"submit\" class=\"btn btn-success\">\n                    " + Q.text("Forms.Membership.Login.SignInButton") + "\n                </button>\n            </div>\n           \n        </div>\n    </form>\n</div>\n";
            };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = DIMSOnline.Membership || (DIMSOnline.Membership = {}));
})(DIMSOnline || (DIMSOnline = {}));
/*<div class="actions" >
    <a href="${Q.resolveUrl('~/Account/ForgotPassword')}" > <i class="fa fa-angle-right" > </i>&nbsp;${Q.text("Forms.Membership.Login.ForgotPassword")}</a >
        <a href="${Q.resolveUrl('~/Account/SignUp')}" > <i class="fa fa-angle-right" > </i>&nbsp;${Q.text("Forms.Membership.Login.SignUpButton")}</a >
            <div class="clear" > </div>
                < /div>*/ 
var DIMSOnline;
(function (DIMSOnline) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('NewPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = DIMSOnline.Membership || (DIMSOnline.Membership = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = DIMSOnline.Membership || (DIMSOnline.Membership = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = DIMSOnline.Membership || (DIMSOnline.Membership = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = DIMSOnline.Membership || (DIMSOnline.Membership = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var InventoryDialog = /** @class */ (function (_super) {
            __extends(InventoryDialog, _super);
            function InventoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.InventoryForm(_this.idPrefix);
                return _this;
            }
            InventoryDialog.prototype.getFormKey = function () { return Transaction.InventoryForm.formKey; };
            InventoryDialog.prototype.getIdProperty = function () { return Transaction.InventoryRow.idProperty; };
            InventoryDialog.prototype.getLocalTextPrefix = function () { return Transaction.InventoryRow.localTextPrefix; };
            InventoryDialog.prototype.getNameProperty = function () { return Transaction.InventoryRow.nameProperty; };
            InventoryDialog.prototype.getService = function () { return Transaction.InventoryService.baseUrl; };
            InventoryDialog.prototype.getDeletePermission = function () { return Transaction.InventoryRow.deletePermission; };
            InventoryDialog.prototype.getInsertPermission = function () { return Transaction.InventoryRow.insertPermission; };
            InventoryDialog.prototype.getUpdatePermission = function () { return Transaction.InventoryRow.updatePermission; };
            InventoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], InventoryDialog);
            return InventoryDialog;
        }(Serenity.EntityDialog));
        Transaction.InventoryDialog = InventoryDialog;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var InventoryGrid = /** @class */ (function (_super) {
            __extends(InventoryGrid, _super);
            function InventoryGrid(container) {
                return _super.call(this, container) || this;
            }
            InventoryGrid.prototype.getColumnsKey = function () { return 'Transaction.Inventory'; };
            InventoryGrid.prototype.getDialogType = function () { return Transaction.InventoryDialog; };
            InventoryGrid.prototype.getIdProperty = function () { return Transaction.InventoryRow.idProperty; };
            InventoryGrid.prototype.getInsertPermission = function () { return Transaction.InventoryRow.insertPermission; };
            InventoryGrid.prototype.getLocalTextPrefix = function () { return Transaction.InventoryRow.localTextPrefix; };
            InventoryGrid.prototype.getService = function () { return Transaction.InventoryService.baseUrl; };
            InventoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InventoryGrid);
            return InventoryGrid;
        }(Serenity.EntityGrid));
        Transaction.InventoryGrid = InventoryGrid;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var MovementStockDialog = /** @class */ (function (_super) {
            __extends(MovementStockDialog, _super);
            function MovementStockDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.MovementStockForm(_this.idPrefix);
                return _this;
            }
            MovementStockDialog.prototype.getFormKey = function () { return Transaction.MovementStockForm.formKey; };
            MovementStockDialog.prototype.getIdProperty = function () { return Transaction.MovementStockRow.idProperty; };
            MovementStockDialog.prototype.getLocalTextPrefix = function () { return Transaction.MovementStockRow.localTextPrefix; };
            MovementStockDialog.prototype.getNameProperty = function () { return Transaction.MovementStockRow.nameProperty; };
            MovementStockDialog.prototype.getService = function () { return Transaction.MovementStockService.baseUrl; };
            MovementStockDialog.prototype.getDeletePermission = function () { return Transaction.MovementStockRow.deletePermission; };
            MovementStockDialog.prototype.getInsertPermission = function () { return Transaction.MovementStockRow.insertPermission; };
            MovementStockDialog.prototype.getUpdatePermission = function () { return Transaction.MovementStockRow.updatePermission; };
            MovementStockDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MovementStockDialog);
            return MovementStockDialog;
        }(Serenity.EntityDialog));
        Transaction.MovementStockDialog = MovementStockDialog;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var MovementStockGrid = /** @class */ (function (_super) {
            __extends(MovementStockGrid, _super);
            function MovementStockGrid(container) {
                return _super.call(this, container) || this;
            }
            MovementStockGrid.prototype.getColumnsKey = function () { return 'Transaction.MovementStock'; };
            MovementStockGrid.prototype.getDialogType = function () { return Transaction.MovementStockDialog; };
            MovementStockGrid.prototype.getIdProperty = function () { return Transaction.MovementStockRow.idProperty; };
            MovementStockGrid.prototype.getInsertPermission = function () { return Transaction.MovementStockRow.insertPermission; };
            MovementStockGrid.prototype.getLocalTextPrefix = function () { return Transaction.MovementStockRow.localTextPrefix; };
            MovementStockGrid.prototype.getService = function () { return Transaction.MovementStockService.baseUrl; };
            MovementStockGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MovementStockGrid);
            return MovementStockGrid;
        }(Serenity.EntityGrid));
        Transaction.MovementStockGrid = MovementStockGrid;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var OrderDetailDialog = /** @class */ (function (_super) {
            __extends(OrderDetailDialog, _super);
            function OrderDetailDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.OrderDetailForm(_this.idPrefix);
                return _this;
            }
            OrderDetailDialog.prototype.getFormKey = function () { return Transaction.OrderDetailForm.formKey; };
            OrderDetailDialog.prototype.getIdProperty = function () { return Transaction.OrderDetailRow.idProperty; };
            OrderDetailDialog.prototype.getLocalTextPrefix = function () { return Transaction.OrderDetailRow.localTextPrefix; };
            OrderDetailDialog.prototype.getNameProperty = function () { return Transaction.OrderDetailRow.nameProperty; };
            OrderDetailDialog.prototype.getService = function () { return Transaction.OrderDetailService.baseUrl; };
            OrderDetailDialog.prototype.getDeletePermission = function () { return Transaction.OrderDetailRow.deletePermission; };
            OrderDetailDialog.prototype.getInsertPermission = function () { return Transaction.OrderDetailRow.insertPermission; };
            OrderDetailDialog.prototype.getUpdatePermission = function () { return Transaction.OrderDetailRow.updatePermission; };
            OrderDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailDialog);
            return OrderDetailDialog;
        }(Serenity.EntityDialog));
        Transaction.OrderDetailDialog = OrderDetailDialog;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var OrderDetailGrid = /** @class */ (function (_super) {
            __extends(OrderDetailGrid, _super);
            function OrderDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            OrderDetailGrid.prototype.getColumnsKey = function () { return 'Transaction.OrderDetail'; };
            OrderDetailGrid.prototype.getDialogType = function () { return Transaction.OrderDetailDialog; };
            OrderDetailGrid.prototype.getIdProperty = function () { return Transaction.OrderDetailRow.idProperty; };
            OrderDetailGrid.prototype.getInsertPermission = function () { return Transaction.OrderDetailRow.insertPermission; };
            OrderDetailGrid.prototype.getLocalTextPrefix = function () { return Transaction.OrderDetailRow.localTextPrefix; };
            OrderDetailGrid.prototype.getService = function () { return Transaction.OrderDetailService.baseUrl; };
            OrderDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailGrid);
            return OrderDetailGrid;
        }(Serenity.EntityGrid));
        Transaction.OrderDetailGrid = OrderDetailGrid;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var OrdersDialog = /** @class */ (function (_super) {
            __extends(OrdersDialog, _super);
            function OrdersDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.OrdersForm(_this.idPrefix);
                return _this;
            }
            OrdersDialog.prototype.getFormKey = function () { return Transaction.OrdersForm.formKey; };
            OrdersDialog.prototype.getIdProperty = function () { return Transaction.OrdersRow.idProperty; };
            OrdersDialog.prototype.getLocalTextPrefix = function () { return Transaction.OrdersRow.localTextPrefix; };
            OrdersDialog.prototype.getNameProperty = function () { return Transaction.OrdersRow.nameProperty; };
            OrdersDialog.prototype.getService = function () { return Transaction.OrdersService.baseUrl; };
            OrdersDialog.prototype.getDeletePermission = function () { return Transaction.OrdersRow.deletePermission; };
            OrdersDialog.prototype.getInsertPermission = function () { return Transaction.OrdersRow.insertPermission; };
            OrdersDialog.prototype.getUpdatePermission = function () { return Transaction.OrdersRow.updatePermission; };
            OrdersDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OrdersDialog);
            return OrdersDialog;
        }(Serenity.EntityDialog));
        Transaction.OrdersDialog = OrdersDialog;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var OrdersGrid = /** @class */ (function (_super) {
            __extends(OrdersGrid, _super);
            function OrdersGrid(container) {
                return _super.call(this, container) || this;
            }
            OrdersGrid.prototype.getColumnsKey = function () { return 'Transaction.Orders'; };
            OrdersGrid.prototype.getDialogType = function () { return Transaction.OrdersDialog; };
            OrdersGrid.prototype.getIdProperty = function () { return Transaction.OrdersRow.idProperty; };
            OrdersGrid.prototype.getInsertPermission = function () { return Transaction.OrdersRow.insertPermission; };
            OrdersGrid.prototype.getLocalTextPrefix = function () { return Transaction.OrdersRow.localTextPrefix; };
            OrdersGrid.prototype.getService = function () { return Transaction.OrdersService.baseUrl; };
            OrdersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OrdersGrid);
            return OrdersGrid;
        }(Serenity.EntityGrid));
        Transaction.OrdersGrid = OrdersGrid;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var PurchaseOrderDialog = /** @class */ (function (_super) {
            __extends(PurchaseOrderDialog, _super);
            function PurchaseOrderDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.PurchaseOrderForm(_this.idPrefix);
                return _this;
            }
            PurchaseOrderDialog.prototype.getFormKey = function () { return Transaction.PurchaseOrderForm.formKey; };
            PurchaseOrderDialog.prototype.getIdProperty = function () { return Transaction.PurchaseOrderRow.idProperty; };
            PurchaseOrderDialog.prototype.getLocalTextPrefix = function () { return Transaction.PurchaseOrderRow.localTextPrefix; };
            PurchaseOrderDialog.prototype.getNameProperty = function () { return Transaction.PurchaseOrderRow.nameProperty; };
            PurchaseOrderDialog.prototype.getService = function () { return Transaction.PurchaseOrderService.baseUrl; };
            PurchaseOrderDialog.prototype.getDeletePermission = function () { return Transaction.PurchaseOrderRow.deletePermission; };
            PurchaseOrderDialog.prototype.getInsertPermission = function () { return Transaction.PurchaseOrderRow.insertPermission; };
            PurchaseOrderDialog.prototype.getUpdatePermission = function () { return Transaction.PurchaseOrderRow.updatePermission; };
            PurchaseOrderDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseOrderDialog);
            return PurchaseOrderDialog;
        }(Serenity.EntityDialog));
        Transaction.PurchaseOrderDialog = PurchaseOrderDialog;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var PurchaseOrderGrid = /** @class */ (function (_super) {
            __extends(PurchaseOrderGrid, _super);
            function PurchaseOrderGrid(container) {
                return _super.call(this, container) || this;
            }
            PurchaseOrderGrid.prototype.getColumnsKey = function () { return 'Transaction.PurchaseOrder'; };
            PurchaseOrderGrid.prototype.getDialogType = function () { return Transaction.PurchaseOrderDialog; };
            PurchaseOrderGrid.prototype.getIdProperty = function () { return Transaction.PurchaseOrderRow.idProperty; };
            PurchaseOrderGrid.prototype.getInsertPermission = function () { return Transaction.PurchaseOrderRow.insertPermission; };
            PurchaseOrderGrid.prototype.getLocalTextPrefix = function () { return Transaction.PurchaseOrderRow.localTextPrefix; };
            PurchaseOrderGrid.prototype.getService = function () { return Transaction.PurchaseOrderService.baseUrl; };
            PurchaseOrderGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseOrderGrid);
            return PurchaseOrderGrid;
        }(Serenity.EntityGrid));
        Transaction.PurchaseOrderGrid = PurchaseOrderGrid;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var PurchaseOrderDetailDialog = /** @class */ (function (_super) {
            __extends(PurchaseOrderDetailDialog, _super);
            function PurchaseOrderDetailDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.PurchaseOrderDetailForm(_this.idPrefix);
                return _this;
            }
            PurchaseOrderDetailDialog.prototype.getFormKey = function () { return Transaction.PurchaseOrderDetailForm.formKey; };
            PurchaseOrderDetailDialog.prototype.getIdProperty = function () { return Transaction.PurchaseOrderDetailRow.idProperty; };
            PurchaseOrderDetailDialog.prototype.getLocalTextPrefix = function () { return Transaction.PurchaseOrderDetailRow.localTextPrefix; };
            PurchaseOrderDetailDialog.prototype.getNameProperty = function () { return Transaction.PurchaseOrderDetailRow.nameProperty; };
            PurchaseOrderDetailDialog.prototype.getService = function () { return Transaction.PurchaseOrderDetailService.baseUrl; };
            PurchaseOrderDetailDialog.prototype.getDeletePermission = function () { return Transaction.PurchaseOrderDetailRow.deletePermission; };
            PurchaseOrderDetailDialog.prototype.getInsertPermission = function () { return Transaction.PurchaseOrderDetailRow.insertPermission; };
            PurchaseOrderDetailDialog.prototype.getUpdatePermission = function () { return Transaction.PurchaseOrderDetailRow.updatePermission; };
            PurchaseOrderDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseOrderDetailDialog);
            return PurchaseOrderDetailDialog;
        }(Serenity.EntityDialog));
        Transaction.PurchaseOrderDetailDialog = PurchaseOrderDetailDialog;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var PurchaseOrderDetailGrid = /** @class */ (function (_super) {
            __extends(PurchaseOrderDetailGrid, _super);
            function PurchaseOrderDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            PurchaseOrderDetailGrid.prototype.getColumnsKey = function () { return 'Transaction.PurchaseOrderDetail'; };
            PurchaseOrderDetailGrid.prototype.getDialogType = function () { return Transaction.PurchaseOrderDetailDialog; };
            PurchaseOrderDetailGrid.prototype.getIdProperty = function () { return Transaction.PurchaseOrderDetailRow.idProperty; };
            PurchaseOrderDetailGrid.prototype.getInsertPermission = function () { return Transaction.PurchaseOrderDetailRow.insertPermission; };
            PurchaseOrderDetailGrid.prototype.getLocalTextPrefix = function () { return Transaction.PurchaseOrderDetailRow.localTextPrefix; };
            PurchaseOrderDetailGrid.prototype.getService = function () { return Transaction.PurchaseOrderDetailService.baseUrl; };
            PurchaseOrderDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseOrderDetailGrid);
            return PurchaseOrderDetailGrid;
        }(Serenity.EntityGrid));
        Transaction.PurchaseOrderDetailGrid = PurchaseOrderDetailGrid;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ReceiveOrderDialog = /** @class */ (function (_super) {
            __extends(ReceiveOrderDialog, _super);
            function ReceiveOrderDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.ReceiveOrderForm(_this.idPrefix);
                return _this;
            }
            ReceiveOrderDialog.prototype.getFormKey = function () { return Transaction.ReceiveOrderForm.formKey; };
            ReceiveOrderDialog.prototype.getIdProperty = function () { return Transaction.ReceiveOrderRow.idProperty; };
            ReceiveOrderDialog.prototype.getLocalTextPrefix = function () { return Transaction.ReceiveOrderRow.localTextPrefix; };
            ReceiveOrderDialog.prototype.getNameProperty = function () { return Transaction.ReceiveOrderRow.nameProperty; };
            ReceiveOrderDialog.prototype.getService = function () { return Transaction.ReceiveOrderService.baseUrl; };
            ReceiveOrderDialog.prototype.getDeletePermission = function () { return Transaction.ReceiveOrderRow.deletePermission; };
            ReceiveOrderDialog.prototype.getInsertPermission = function () { return Transaction.ReceiveOrderRow.insertPermission; };
            ReceiveOrderDialog.prototype.getUpdatePermission = function () { return Transaction.ReceiveOrderRow.updatePermission; };
            ReceiveOrderDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ReceiveOrderDialog);
            return ReceiveOrderDialog;
        }(Serenity.EntityDialog));
        Transaction.ReceiveOrderDialog = ReceiveOrderDialog;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ReceiveOrderGrid = /** @class */ (function (_super) {
            __extends(ReceiveOrderGrid, _super);
            function ReceiveOrderGrid(container) {
                return _super.call(this, container) || this;
            }
            ReceiveOrderGrid.prototype.getColumnsKey = function () { return 'Transaction.ReceiveOrder'; };
            ReceiveOrderGrid.prototype.getDialogType = function () { return Transaction.ReceiveOrderDialog; };
            ReceiveOrderGrid.prototype.getIdProperty = function () { return Transaction.ReceiveOrderRow.idProperty; };
            ReceiveOrderGrid.prototype.getInsertPermission = function () { return Transaction.ReceiveOrderRow.insertPermission; };
            ReceiveOrderGrid.prototype.getLocalTextPrefix = function () { return Transaction.ReceiveOrderRow.localTextPrefix; };
            ReceiveOrderGrid.prototype.getService = function () { return Transaction.ReceiveOrderService.baseUrl; };
            ReceiveOrderGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ReceiveOrderGrid);
            return ReceiveOrderGrid;
        }(Serenity.EntityGrid));
        Transaction.ReceiveOrderGrid = ReceiveOrderGrid;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ReceiveOrderDetailDialog = /** @class */ (function (_super) {
            __extends(ReceiveOrderDetailDialog, _super);
            function ReceiveOrderDetailDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.ReceiveOrderDetailForm(_this.idPrefix);
                return _this;
            }
            ReceiveOrderDetailDialog.prototype.getFormKey = function () { return Transaction.ReceiveOrderDetailForm.formKey; };
            ReceiveOrderDetailDialog.prototype.getIdProperty = function () { return Transaction.ReceiveOrderDetailRow.idProperty; };
            ReceiveOrderDetailDialog.prototype.getLocalTextPrefix = function () { return Transaction.ReceiveOrderDetailRow.localTextPrefix; };
            ReceiveOrderDetailDialog.prototype.getService = function () { return Transaction.ReceiveOrderDetailService.baseUrl; };
            ReceiveOrderDetailDialog.prototype.getDeletePermission = function () { return Transaction.ReceiveOrderDetailRow.deletePermission; };
            ReceiveOrderDetailDialog.prototype.getInsertPermission = function () { return Transaction.ReceiveOrderDetailRow.insertPermission; };
            ReceiveOrderDetailDialog.prototype.getUpdatePermission = function () { return Transaction.ReceiveOrderDetailRow.updatePermission; };
            ReceiveOrderDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ReceiveOrderDetailDialog);
            return ReceiveOrderDetailDialog;
        }(Serenity.EntityDialog));
        Transaction.ReceiveOrderDetailDialog = ReceiveOrderDetailDialog;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ReceiveOrderDetailGrid = /** @class */ (function (_super) {
            __extends(ReceiveOrderDetailGrid, _super);
            function ReceiveOrderDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            ReceiveOrderDetailGrid.prototype.getColumnsKey = function () { return 'Transaction.ReceiveOrderDetail'; };
            ReceiveOrderDetailGrid.prototype.getDialogType = function () { return Transaction.ReceiveOrderDetailDialog; };
            ReceiveOrderDetailGrid.prototype.getIdProperty = function () { return Transaction.ReceiveOrderDetailRow.idProperty; };
            ReceiveOrderDetailGrid.prototype.getInsertPermission = function () { return Transaction.ReceiveOrderDetailRow.insertPermission; };
            ReceiveOrderDetailGrid.prototype.getLocalTextPrefix = function () { return Transaction.ReceiveOrderDetailRow.localTextPrefix; };
            ReceiveOrderDetailGrid.prototype.getService = function () { return Transaction.ReceiveOrderDetailService.baseUrl; };
            ReceiveOrderDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ReceiveOrderDetailGrid);
            return ReceiveOrderDetailGrid;
        }(Serenity.EntityGrid));
        Transaction.ReceiveOrderDetailGrid = ReceiveOrderDetailGrid;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var SerialNumberUnitDialog = /** @class */ (function (_super) {
            __extends(SerialNumberUnitDialog, _super);
            function SerialNumberUnitDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.SerialNumberUnitForm(_this.idPrefix);
                return _this;
            }
            SerialNumberUnitDialog.prototype.getFormKey = function () { return Transaction.SerialNumberUnitForm.formKey; };
            SerialNumberUnitDialog.prototype.getIdProperty = function () { return Transaction.SerialNumberUnitRow.idProperty; };
            SerialNumberUnitDialog.prototype.getLocalTextPrefix = function () { return Transaction.SerialNumberUnitRow.localTextPrefix; };
            SerialNumberUnitDialog.prototype.getNameProperty = function () { return Transaction.SerialNumberUnitRow.nameProperty; };
            SerialNumberUnitDialog.prototype.getService = function () { return Transaction.SerialNumberUnitService.baseUrl; };
            SerialNumberUnitDialog.prototype.getDeletePermission = function () { return Transaction.SerialNumberUnitRow.deletePermission; };
            SerialNumberUnitDialog.prototype.getInsertPermission = function () { return Transaction.SerialNumberUnitRow.insertPermission; };
            SerialNumberUnitDialog.prototype.getUpdatePermission = function () { return Transaction.SerialNumberUnitRow.updatePermission; };
            SerialNumberUnitDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SerialNumberUnitDialog);
            return SerialNumberUnitDialog;
        }(Serenity.EntityDialog));
        Transaction.SerialNumberUnitDialog = SerialNumberUnitDialog;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var SerialNumberUnitGrid = /** @class */ (function (_super) {
            __extends(SerialNumberUnitGrid, _super);
            function SerialNumberUnitGrid(container) {
                return _super.call(this, container) || this;
            }
            SerialNumberUnitGrid.prototype.getColumnsKey = function () { return 'Transaction.SerialNumberUnit'; };
            SerialNumberUnitGrid.prototype.getDialogType = function () { return Transaction.SerialNumberUnitDialog; };
            SerialNumberUnitGrid.prototype.getIdProperty = function () { return Transaction.SerialNumberUnitRow.idProperty; };
            SerialNumberUnitGrid.prototype.getInsertPermission = function () { return Transaction.SerialNumberUnitRow.insertPermission; };
            SerialNumberUnitGrid.prototype.getLocalTextPrefix = function () { return Transaction.SerialNumberUnitRow.localTextPrefix; };
            SerialNumberUnitGrid.prototype.getService = function () { return Transaction.SerialNumberUnitService.baseUrl; };
            SerialNumberUnitGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SerialNumberUnitGrid);
            return SerialNumberUnitGrid;
        }(Serenity.EntityGrid));
        Transaction.SerialNumberUnitGrid = SerialNumberUnitGrid;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ServiceUnitDialog = /** @class */ (function (_super) {
            __extends(ServiceUnitDialog, _super);
            function ServiceUnitDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.ServiceUnitForm(_this.idPrefix);
                return _this;
            }
            ServiceUnitDialog.prototype.getFormKey = function () { return Transaction.ServiceUnitForm.formKey; };
            ServiceUnitDialog.prototype.getIdProperty = function () { return Transaction.ServiceUnitRow.idProperty; };
            ServiceUnitDialog.prototype.getLocalTextPrefix = function () { return Transaction.ServiceUnitRow.localTextPrefix; };
            ServiceUnitDialog.prototype.getNameProperty = function () { return Transaction.ServiceUnitRow.nameProperty; };
            ServiceUnitDialog.prototype.getService = function () { return Transaction.ServiceUnitService.baseUrl; };
            ServiceUnitDialog.prototype.getDeletePermission = function () { return Transaction.ServiceUnitRow.deletePermission; };
            ServiceUnitDialog.prototype.getInsertPermission = function () { return Transaction.ServiceUnitRow.insertPermission; };
            ServiceUnitDialog.prototype.getUpdatePermission = function () { return Transaction.ServiceUnitRow.updatePermission; };
            ServiceUnitDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ServiceUnitDialog);
            return ServiceUnitDialog;
        }(Serenity.EntityDialog));
        Transaction.ServiceUnitDialog = ServiceUnitDialog;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ServiceUnitGrid = /** @class */ (function (_super) {
            __extends(ServiceUnitGrid, _super);
            function ServiceUnitGrid(container) {
                return _super.call(this, container) || this;
            }
            ServiceUnitGrid.prototype.getColumnsKey = function () { return 'Transaction.ServiceUnit'; };
            ServiceUnitGrid.prototype.getDialogType = function () { return Transaction.ServiceUnitDialog; };
            ServiceUnitGrid.prototype.getIdProperty = function () { return Transaction.ServiceUnitRow.idProperty; };
            ServiceUnitGrid.prototype.getInsertPermission = function () { return Transaction.ServiceUnitRow.insertPermission; };
            ServiceUnitGrid.prototype.getLocalTextPrefix = function () { return Transaction.ServiceUnitRow.localTextPrefix; };
            ServiceUnitGrid.prototype.getService = function () { return Transaction.ServiceUnitService.baseUrl; };
            ServiceUnitGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ServiceUnitGrid);
            return ServiceUnitGrid;
        }(Serenity.EntityGrid));
        Transaction.ServiceUnitGrid = ServiceUnitGrid;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ServiceUnitDetailDialog = /** @class */ (function (_super) {
            __extends(ServiceUnitDetailDialog, _super);
            function ServiceUnitDetailDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.ServiceUnitDetailForm(_this.idPrefix);
                return _this;
            }
            ServiceUnitDetailDialog.prototype.getFormKey = function () { return Transaction.ServiceUnitDetailForm.formKey; };
            ServiceUnitDetailDialog.prototype.getIdProperty = function () { return Transaction.ServiceUnitDetailRow.idProperty; };
            ServiceUnitDetailDialog.prototype.getLocalTextPrefix = function () { return Transaction.ServiceUnitDetailRow.localTextPrefix; };
            ServiceUnitDetailDialog.prototype.getNameProperty = function () { return Transaction.ServiceUnitDetailRow.nameProperty; };
            ServiceUnitDetailDialog.prototype.getService = function () { return Transaction.ServiceUnitDetailService.baseUrl; };
            ServiceUnitDetailDialog.prototype.getDeletePermission = function () { return Transaction.ServiceUnitDetailRow.deletePermission; };
            ServiceUnitDetailDialog.prototype.getInsertPermission = function () { return Transaction.ServiceUnitDetailRow.insertPermission; };
            ServiceUnitDetailDialog.prototype.getUpdatePermission = function () { return Transaction.ServiceUnitDetailRow.updatePermission; };
            ServiceUnitDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ServiceUnitDetailDialog);
            return ServiceUnitDetailDialog;
        }(Serenity.EntityDialog));
        Transaction.ServiceUnitDetailDialog = ServiceUnitDetailDialog;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ServiceUnitDetailGrid = /** @class */ (function (_super) {
            __extends(ServiceUnitDetailGrid, _super);
            function ServiceUnitDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            ServiceUnitDetailGrid.prototype.getColumnsKey = function () { return 'Transaction.ServiceUnitDetail'; };
            ServiceUnitDetailGrid.prototype.getDialogType = function () { return Transaction.ServiceUnitDetailDialog; };
            ServiceUnitDetailGrid.prototype.getIdProperty = function () { return Transaction.ServiceUnitDetailRow.idProperty; };
            ServiceUnitDetailGrid.prototype.getInsertPermission = function () { return Transaction.ServiceUnitDetailRow.insertPermission; };
            ServiceUnitDetailGrid.prototype.getLocalTextPrefix = function () { return Transaction.ServiceUnitDetailRow.localTextPrefix; };
            ServiceUnitDetailGrid.prototype.getService = function () { return Transaction.ServiceUnitDetailService.baseUrl; };
            ServiceUnitDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ServiceUnitDetailGrid);
            return ServiceUnitDetailGrid;
        }(Serenity.EntityGrid));
        Transaction.ServiceUnitDetailGrid = ServiceUnitDetailGrid;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ServiceUnitTypeDialog = /** @class */ (function (_super) {
            __extends(ServiceUnitTypeDialog, _super);
            function ServiceUnitTypeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.ServiceUnitTypeForm(_this.idPrefix);
                return _this;
            }
            ServiceUnitTypeDialog.prototype.getFormKey = function () { return Transaction.ServiceUnitTypeForm.formKey; };
            ServiceUnitTypeDialog.prototype.getIdProperty = function () { return Transaction.ServiceUnitTypeRow.idProperty; };
            ServiceUnitTypeDialog.prototype.getLocalTextPrefix = function () { return Transaction.ServiceUnitTypeRow.localTextPrefix; };
            ServiceUnitTypeDialog.prototype.getNameProperty = function () { return Transaction.ServiceUnitTypeRow.nameProperty; };
            ServiceUnitTypeDialog.prototype.getService = function () { return Transaction.ServiceUnitTypeService.baseUrl; };
            ServiceUnitTypeDialog.prototype.getDeletePermission = function () { return Transaction.ServiceUnitTypeRow.deletePermission; };
            ServiceUnitTypeDialog.prototype.getInsertPermission = function () { return Transaction.ServiceUnitTypeRow.insertPermission; };
            ServiceUnitTypeDialog.prototype.getUpdatePermission = function () { return Transaction.ServiceUnitTypeRow.updatePermission; };
            ServiceUnitTypeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ServiceUnitTypeDialog);
            return ServiceUnitTypeDialog;
        }(Serenity.EntityDialog));
        Transaction.ServiceUnitTypeDialog = ServiceUnitTypeDialog;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ServiceUnitTypeGrid = /** @class */ (function (_super) {
            __extends(ServiceUnitTypeGrid, _super);
            function ServiceUnitTypeGrid(container) {
                return _super.call(this, container) || this;
            }
            ServiceUnitTypeGrid.prototype.getColumnsKey = function () { return 'Transaction.ServiceUnitType'; };
            ServiceUnitTypeGrid.prototype.getDialogType = function () { return Transaction.ServiceUnitTypeDialog; };
            ServiceUnitTypeGrid.prototype.getIdProperty = function () { return Transaction.ServiceUnitTypeRow.idProperty; };
            ServiceUnitTypeGrid.prototype.getInsertPermission = function () { return Transaction.ServiceUnitTypeRow.insertPermission; };
            ServiceUnitTypeGrid.prototype.getLocalTextPrefix = function () { return Transaction.ServiceUnitTypeRow.localTextPrefix; };
            ServiceUnitTypeGrid.prototype.getService = function () { return Transaction.ServiceUnitTypeService.baseUrl; };
            ServiceUnitTypeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ServiceUnitTypeGrid);
            return ServiceUnitTypeGrid;
        }(Serenity.EntityGrid));
        Transaction.ServiceUnitTypeGrid = ServiceUnitTypeGrid;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ServiceUnitTypeDetailDialog = /** @class */ (function (_super) {
            __extends(ServiceUnitTypeDetailDialog, _super);
            function ServiceUnitTypeDetailDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.ServiceUnitTypeDetailForm(_this.idPrefix);
                return _this;
            }
            ServiceUnitTypeDetailDialog.prototype.getFormKey = function () { return Transaction.ServiceUnitTypeDetailForm.formKey; };
            ServiceUnitTypeDetailDialog.prototype.getIdProperty = function () { return Transaction.ServiceUnitTypeDetailRow.idProperty; };
            ServiceUnitTypeDetailDialog.prototype.getLocalTextPrefix = function () { return Transaction.ServiceUnitTypeDetailRow.localTextPrefix; };
            ServiceUnitTypeDetailDialog.prototype.getNameProperty = function () { return Transaction.ServiceUnitTypeDetailRow.nameProperty; };
            ServiceUnitTypeDetailDialog.prototype.getService = function () { return Transaction.ServiceUnitTypeDetailService.baseUrl; };
            ServiceUnitTypeDetailDialog.prototype.getDeletePermission = function () { return Transaction.ServiceUnitTypeDetailRow.deletePermission; };
            ServiceUnitTypeDetailDialog.prototype.getInsertPermission = function () { return Transaction.ServiceUnitTypeDetailRow.insertPermission; };
            ServiceUnitTypeDetailDialog.prototype.getUpdatePermission = function () { return Transaction.ServiceUnitTypeDetailRow.updatePermission; };
            ServiceUnitTypeDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ServiceUnitTypeDetailDialog);
            return ServiceUnitTypeDetailDialog;
        }(Serenity.EntityDialog));
        Transaction.ServiceUnitTypeDetailDialog = ServiceUnitTypeDetailDialog;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ServiceUnitTypeDetailGrid = /** @class */ (function (_super) {
            __extends(ServiceUnitTypeDetailGrid, _super);
            function ServiceUnitTypeDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            ServiceUnitTypeDetailGrid.prototype.getColumnsKey = function () { return 'Transaction.ServiceUnitTypeDetail'; };
            ServiceUnitTypeDetailGrid.prototype.getDialogType = function () { return Transaction.ServiceUnitTypeDetailDialog; };
            ServiceUnitTypeDetailGrid.prototype.getIdProperty = function () { return Transaction.ServiceUnitTypeDetailRow.idProperty; };
            ServiceUnitTypeDetailGrid.prototype.getInsertPermission = function () { return Transaction.ServiceUnitTypeDetailRow.insertPermission; };
            ServiceUnitTypeDetailGrid.prototype.getLocalTextPrefix = function () { return Transaction.ServiceUnitTypeDetailRow.localTextPrefix; };
            ServiceUnitTypeDetailGrid.prototype.getService = function () { return Transaction.ServiceUnitTypeDetailService.baseUrl; };
            ServiceUnitTypeDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ServiceUnitTypeDetailGrid);
            return ServiceUnitTypeDetailGrid;
        }(Serenity.EntityGrid));
        Transaction.ServiceUnitTypeDetailGrid = ServiceUnitTypeDetailGrid;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ServiceUnitTypePriceDialog = /** @class */ (function (_super) {
            __extends(ServiceUnitTypePriceDialog, _super);
            function ServiceUnitTypePriceDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Transaction.ServiceUnitTypePriceForm(_this.idPrefix);
                return _this;
            }
            ServiceUnitTypePriceDialog.prototype.getFormKey = function () { return Transaction.ServiceUnitTypePriceForm.formKey; };
            ServiceUnitTypePriceDialog.prototype.getIdProperty = function () { return Transaction.ServiceUnitTypePriceRow.idProperty; };
            ServiceUnitTypePriceDialog.prototype.getLocalTextPrefix = function () { return Transaction.ServiceUnitTypePriceRow.localTextPrefix; };
            ServiceUnitTypePriceDialog.prototype.getService = function () { return Transaction.ServiceUnitTypePriceService.baseUrl; };
            ServiceUnitTypePriceDialog.prototype.getDeletePermission = function () { return Transaction.ServiceUnitTypePriceRow.deletePermission; };
            ServiceUnitTypePriceDialog.prototype.getInsertPermission = function () { return Transaction.ServiceUnitTypePriceRow.insertPermission; };
            ServiceUnitTypePriceDialog.prototype.getUpdatePermission = function () { return Transaction.ServiceUnitTypePriceRow.updatePermission; };
            ServiceUnitTypePriceDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ServiceUnitTypePriceDialog);
            return ServiceUnitTypePriceDialog;
        }(Serenity.EntityDialog));
        Transaction.ServiceUnitTypePriceDialog = ServiceUnitTypePriceDialog;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
var DIMSOnline;
(function (DIMSOnline) {
    var Transaction;
    (function (Transaction) {
        var ServiceUnitTypePriceGrid = /** @class */ (function (_super) {
            __extends(ServiceUnitTypePriceGrid, _super);
            function ServiceUnitTypePriceGrid(container) {
                return _super.call(this, container) || this;
            }
            ServiceUnitTypePriceGrid.prototype.getColumnsKey = function () { return 'Transaction.ServiceUnitTypePrice'; };
            ServiceUnitTypePriceGrid.prototype.getDialogType = function () { return Transaction.ServiceUnitTypePriceDialog; };
            ServiceUnitTypePriceGrid.prototype.getIdProperty = function () { return Transaction.ServiceUnitTypePriceRow.idProperty; };
            ServiceUnitTypePriceGrid.prototype.getInsertPermission = function () { return Transaction.ServiceUnitTypePriceRow.insertPermission; };
            ServiceUnitTypePriceGrid.prototype.getLocalTextPrefix = function () { return Transaction.ServiceUnitTypePriceRow.localTextPrefix; };
            ServiceUnitTypePriceGrid.prototype.getService = function () { return Transaction.ServiceUnitTypePriceService.baseUrl; };
            ServiceUnitTypePriceGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ServiceUnitTypePriceGrid);
            return ServiceUnitTypePriceGrid;
        }(Serenity.EntityGrid));
        Transaction.ServiceUnitTypePriceGrid = ServiceUnitTypePriceGrid;
    })(Transaction = DIMSOnline.Transaction || (DIMSOnline.Transaction = {}));
})(DIMSOnline || (DIMSOnline = {}));
//# sourceMappingURL=DIMSOnline.Web.js.map