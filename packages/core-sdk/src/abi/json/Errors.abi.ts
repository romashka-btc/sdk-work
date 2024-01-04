export default [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "hookType",
        type: "uint8",
      },
    ],
    name: "BaseModule_HooksParamsLengthMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseModule_OnlyModuleRegistry",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseModule_Unauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseModule_ZeroIpaRegistry",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseModule_ZeroLicenseRegistry",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseRelationshipProcessor_OnlyRelationshipModule",
    type: "error",
  },
  {
    inputs: [],
    name: "CollectModule_CallerUnauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "CollectModule_CollectNotYetInitialized",
    type: "error",
  },
  {
    inputs: [],
    name: "CollectModule_CollectUnauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "CollectModule_IPAssetAlreadyInitialized",
    type: "error",
  },
  {
    inputs: [],
    name: "CollectModule_IPAssetNonExistent",
    type: "error",
  },
  {
    inputs: [],
    name: "CollectModule_IPOrgNonExistent",
    type: "error",
  },
  {
    inputs: [],
    name: "CollectNFT_AlreadyInitialized",
    type: "error",
  },
  {
    inputs: [],
    name: "CollectNFT_CallerUnauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "CollectNFT_CollectorInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "CollectNFT_IPAssetNonExistent",
    type: "error",
  },
  {
    inputs: [],
    name: "CollectPaymentModule_AmountInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "CollectPaymentModule_ERC20TransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "CollectPaymentModule_ERC20TransferInvalidABIEncoding",
    type: "error",
  },
  {
    inputs: [],
    name: "CollectPaymentModule_ERC20TransferInvalidReturnValue",
    type: "error",
  },
  {
    inputs: [],
    name: "CollectPaymentModule_InvalidSettings",
    type: "error",
  },
  {
    inputs: [],
    name: "CollectPaymentModule_NativeTokenNotAllowed",
    type: "error",
  },
  {
    inputs: [],
    name: "CollectPaymentModule_NativeTransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "CollectPaymentModule_PaymentInsufficient",
    type: "error",
  },
  {
    inputs: [],
    name: "CollectPaymentModule_PaymentParamsInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "CollectPaymentModule_TokenInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721_OwnerInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721_ReceiverInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721_SafeTransferUnsupported",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721_SenderUnauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721_TokenAlreadyMinted",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721_TokenNonExistent",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptyArray",
    type: "error",
  },
  {
    inputs: [],
    name: "HookRegistry_CallerNotIPOrgOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "HookRegistry_HooksConfigLengthMismatch",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "hooksIndex",
        type: "uint256",
      },
    ],
    name: "HookRegistry_IndexOutOfBounds",
    type: "error",
  },
  {
    inputs: [],
    name: "HookRegistry_MaxHooksExceeded",
    type: "error",
  },
  {
    inputs: [],
    name: "HookRegistry_RegisteringDuplicatedHook",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "hookAddress",
        type: "address",
      },
    ],
    name: "HookRegistry_RegisteringNonWhitelistedHook",
    type: "error",
  },
  {
    inputs: [],
    name: "HookRegistry_RegisteringZeroAddressHook",
    type: "error",
  },
  {
    inputs: [],
    name: "HookRegistry_ZeroModuleRegistry",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "Hook_AsyncHookError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "invalidRequestId",
        type: "bytes32",
      },
    ],
    name: "Hook_InvalidAsyncRequestId",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "Hook_InvalidHookConfig",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "current",
        type: "address",
      },
      {
        internalType: "address",
        name: "expected",
        type: "address",
      },
    ],
    name: "Hook_OnlyCallbackCallerCanCallback",
    type: "error",
  },
  {
    inputs: [],
    name: "Hook_RequestedNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "Hook_UnsupportedAsyncOperation",
    type: "error",
  },
  {
    inputs: [],
    name: "Hook_UnsupportedSyncOperation",
    type: "error",
  },
  {
    inputs: [],
    name: "IPAccountImpl_CallerNotOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "IPAccountRegistry_InitializationFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "IPAccountRegistry_NonExistentIpAccountImpl",
    type: "error",
  },
  {
    inputs: [],
    name: "IPOrgController_IPOrgNonExistent",
    type: "error",
  },
  {
    inputs: [],
    name: "IPOrgController_InvalidIPOrgOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "IPOrgController_InvalidNewIPOrgOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "IPOrgController_InvalidOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "IPOrgController_OwnerTransferUninitialized",
    type: "error",
  },
  {
    inputs: [],
    name: "IPOrg_IdDoesNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "IPOrg_IdOverBounds",
    type: "error",
  },
  {
    inputs: [],
    name: "IPOrg_LicensingNotConfigured",
    type: "error",
  },
  {
    inputs: [],
    name: "LengthMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "LibDuration_CallerNotRenewer",
    type: "error",
  },
  {
    inputs: [],
    name: "LibDuration_InvalidStartTime",
    type: "error",
  },
  {
    inputs: [],
    name: "LibDuration_NotRenewable",
    type: "error",
  },
  {
    inputs: [],
    name: "LibDuration_ZeroTTL",
    type: "error",
  },
  {
    inputs: [],
    name: "LicenseRegistry_CallerNotLicensingModule",
    type: "error",
  },
  {
    inputs: [],
    name: "LicenseRegistry_CallerNotLicensingModuleOrLicensee",
    type: "error",
  },
  {
    inputs: [],
    name: "LicenseRegistry_CallerNotLicensor",
    type: "error",
  },
  {
    inputs: [],
    name: "LicenseRegistry_CallerNotRevoker",
    type: "error",
  },
  {
    inputs: [],
    name: "LicenseRegistry_IPANotActive",
    type: "error",
  },
  {
    inputs: [],
    name: "LicenseRegistry_InvalidLicenseStatus",
    type: "error",
  },
  {
    inputs: [],
    name: "LicenseRegistry_LicenseAlreadyLinkedToIpa",
    type: "error",
  },
  {
    inputs: [],
    name: "LicenseRegistry_LicenseNotActive",
    type: "error",
  },
  {
    inputs: [],
    name: "LicenseRegistry_LicenseNotPendingApproval",
    type: "error",
  },
  {
    inputs: [],
    name: "LicenseRegistry_ParentLicenseNotActive",
    type: "error",
  },
  {
    inputs: [],
    name: "LicenseRegistry_UnknownLicenseId",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingFrameworkRepo_DuplicateParamType",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingFrameworkRepo_FrameworkAlreadyAdded",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingFrameworkRepo_TooManyParams",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule_CallerNotIpOrgOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule_CallerNotLicenseOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule_CallerNotLicensor",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule_CantFindParentLicenseOrRelatedIpa",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule_CommercialLicenseNotAllowed",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule_DerivativeNotAllowed",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule_DuplicateParam",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule_DuplicateTermId",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule_InvalidAction",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule_InvalidConfigType",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule_InvalidInputValue",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule_InvalidIpa",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule_InvalidLicenseeType",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule_InvalidLicensorConfig",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule_InvalidLicensorType",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule_InvalidParamValue",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule_InvalidParamsLength",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule_InvalidTermCommercialStatus",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule_IpOrgAlreadyConfigured",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule_IpOrgFrameworkAlreadySet",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule_IpOrgFrameworkNotSet",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule_IpOrgNotConfigured",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule_NonCommercialTermsRequired",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule_ParamSetByIpOrg",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule_ParentLicenseNotActive",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule_ReciprocalCannotSetParams",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule_ShareAlikeDisabled",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensingModule_ipOrgTermNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensorApprovalHook_ApprovalAlreadyRequested",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensorApprovalHook_InvalidLicenseId",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensorApprovalHook_InvalidLicensor",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensorApprovalHook_InvalidResponseStatus",
    type: "error",
  },
  {
    inputs: [],
    name: "LicensorApprovalHook_NoApprovalRequested",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "MissingRole",
    type: "error",
  },
  {
    inputs: [],
    name: "ModuleRegistry_CallerNotOrgOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ModuleRegistry_DependencyAlreadyRegistered",
    type: "error",
  },
  {
    inputs: [],
    name: "ModuleRegistry_DependencyNotYetRegistered",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "hookKey",
        type: "string",
      },
    ],
    name: "ModuleRegistry_HookNotRegistered",
    type: "error",
  },
  {
    inputs: [],
    name: "ModuleRegistry_InvalidGateway",
    type: "error",
  },
  {
    inputs: [],
    name: "ModuleRegistry_ModuleAlreadyRegistered",
    type: "error",
  },
  {
    inputs: [],
    name: "ModuleRegistry_ModuleKeyMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "ModuleRegistry_ModuleNotYetRegistered",
    type: "error",
  },
  {
    inputs: [],
    name: "ModuleRegistry_Unauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "RegistrationModule_CallerNotAuthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "RegistrationModule_IPAssetNonExistent",
    type: "error",
  },
  {
    inputs: [],
    name: "RegistrationModule_IPOrgNotConfigured",
    type: "error",
  },
  {
    inputs: [],
    name: "RegistrationModule_InvalidCaller",
    type: "error",
  },
  {
    inputs: [],
    name: "RegistrationModule_InvalidConfigOperation",
    type: "error",
  },
  {
    inputs: [],
    name: "RegistrationModule_InvalidExecutionOperation",
    type: "error",
  },
  {
    inputs: [],
    name: "RegistrationModule_InvalidIPAssetType",
    type: "error",
  },
  {
    inputs: [],
    name: "RegistrationModule_TooManyAssetTypes",
    type: "error",
  },
  {
    inputs: [],
    name: "RelationshipModule_CallerNotIpOrgOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "RelationshipModule_CannotRelateToOtherIPOrg",
    type: "error",
  },
  {
    inputs: [],
    name: "RelationshipModule_IntentAlreadyRegistered",
    type: "error",
  },
  {
    inputs: [],
    name: "RelationshipModule_InvalidConfigOperation",
    type: "error",
  },
  {
    inputs: [],
    name: "RelationshipModule_InvalidDstAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "RelationshipModule_InvalidDstId",
    type: "error",
  },
  {
    inputs: [],
    name: "RelationshipModule_InvalidEndTimestamp",
    type: "error",
  },
  {
    inputs: [],
    name: "RelationshipModule_InvalidRelatable",
    type: "error",
  },
  {
    inputs: [],
    name: "RelationshipModule_InvalidSrcAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "RelationshipModule_InvalidSrcId",
    type: "error",
  },
  {
    inputs: [],
    name: "RelationshipModule_InvalidTTL",
    type: "error",
  },
  {
    inputs: [],
    name: "RelationshipModule_IpOrgRelatableCannotBeProtocolLevel",
    type: "error",
  },
  {
    inputs: [],
    name: "RelationshipModule_NonExistingRelationship",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "relType",
        type: "string",
      },
    ],
    name: "RelationshipModule_RelTypeNotSet",
    type: "error",
  },
  {
    inputs: [],
    name: "RelationshipModule_UnsupportedIpOrgIndexType",
    type: "error",
  },
  {
    inputs: [],
    name: "RelationshipModule_UnsupportedRelationshipDst",
    type: "error",
  },
  {
    inputs: [],
    name: "RelationshipModule_UnsupportedRelationshipSrc",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "accountsLength",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "allocationsLength",
        type: "uint256",
      },
    ],
    name: "RoyaltyNFT_AccountsAndAllocationsMismatch",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "allocationsSum",
        type: "uint32",
      },
    ],
    name: "RoyaltyNFT_InvalidAllocationsSum",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "ownerAddress",
        type: "address",
      },
    ],
    name: "TokenGatedHook_NotTokenOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "UintArrayMask_EmptyArray",
    type: "error",
  },
  {
    inputs: [],
    name: "Unauthorized",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "UnsupportedInterface",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAmount",
    type: "error",
  },
] as const;
