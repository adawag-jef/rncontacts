import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const Message = ({
  info,
  primary,
  onDismiss,
  danger,
  message,
  success,
  retry,
  retryFn,
}) => {
  const [userDismissed, setUserDismissed] = useState(false);
  const getBackGroundColor = () => {
    if (primary) {
      return colors.primary;
    }
    if (success) {
      return colors.success;
    }
    if (info) {
      return colors.secondary;
    }

    if (danger) {
      return colors.danger;
    }
  };
  return (
    <>
      {userDismissed ? null : (
        <TouchableOpacity
          style={[styles.wrapper, {backgroundColor: getBackGroundColor()}]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {message && (
              <Text
                style={{
                  color: colors.white,
                }}>
                {message}
              </Text>
            )}
            {retry && !typeof onDismiss === 'function' && (
              <TouchableOpacity onPress={retryFn}>
                <Text
                  style={{
                    color: colors.white,
                  }}>
                  Retry
                </Text>
              </TouchableOpacity>
            )}

            {typeof onDismiss === 'function' && (
              <TouchableOpacity
                onPress={() => {
                  setUserDismissed(true);
                  onDismiss;
                }}>
                <Text
                  style={{
                    color: colors.white,
                  }}>
                  X
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Message;
