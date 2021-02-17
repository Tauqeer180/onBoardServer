const initialState = {
  tpi_rcName: 'Received',
  tpi_aaSolution: 'Pending',
  tpi_ntc: 'Received',
  tpi_vtSector: 'Pending',
  tpi_date: 'Received',
  tpi_brPartner: 'Pending',
  tpi_aBdmOwner: 'Pending',
  tpi_ccLocation: 'Pending',
  tpi_EEADocuments: 'Pending',
  tpi_TLoAR: 'Pending',

  mci_crAddress: 'Received',
  mci_crNumber: 'Received',
  mci_ctAddress: 'Received',
  mci_vtSector: 'Received',

  cci_cName: 'Received',
  cci_skypeAddress: 'Received',
  cci_mNumber: 'Received',
  cci_lNumber: 'Received',
  cci_otpMNumber: 'Received',

  tci_crAddress: 'Received',
  tci_crNumber: 'Received',
  tci_ctAddress: 'Received',
  tci_wUrl: 'Received',

  cci_2_cName: 'Received',
  cci_2_Position: 'Received',
  cci_2_mNumber: 'Received',
  cci_2_lNumber: 'Received',
  cci_2_otpMNumber: 'Received',
  cci_2_skypeAddress: 'Received',
}
export const ciReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_CI':
      return {
        ...state,
        state: action.payload,
        id: action.id,
      }
    default:
      return state
  }
}
