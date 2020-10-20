import CloseDialogComponent from '../components/CloseDialogComponent';
import WalletContext from '../contexts/WalletContext';
import React from 'react';

class WalletConnectDialog extends React.Component {

  render() {
    
    return (
      <WalletContext.Consumer>
        {walletContext => (
          <div className='Dialog WalletConnectDialog'>
            <div className='DialogHeader'>
              <CloseDialogComponent/>
            </div>
            <div className='DialogBody HeightAuto TextAlignCenter PaddingSmall'>
              <div className='PaddingTopSmall'>
                <img className='CircularIcon large' src='data:image/png;base64,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'/>
              </div>
              <h1 className='FontSizeLarge PaddingMedium PaddingTopSmall'>
                Connect With {walletContext.wallet.name()}
              </h1>
            </div>
            <div className='DialogFooter'>
              <button className='CallToAction' onClick={this.props.connect}>
                Connect
              </button>
              <div className='PoweredBy'>
                <a target='_blank' rel='noopener noreferrer' href='https://depay.app' className='PoweredByLink' title='Powered by DePay: Decentralized Payments'>
                  by DePay
                </a>
              </div>
            </div>
          </div>
        )}
      </WalletContext.Consumer>
    )
  }
}

export default WalletConnectDialog;