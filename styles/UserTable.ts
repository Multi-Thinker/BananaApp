import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Horizontal layout
    justifyContent: 'space-between', // Space between left and right containers
    alignItems: 'center', // Center vertically
    paddingHorizontal: 16, // Adjust as needed
    backgroundColor: '#ffffff',
    borderBottomWidth: 1, // Add a border or adjust as needed
    borderBottomColor: '#ccc', // Add a border color or adjust as needed
    marginBottom: 20,
    padding: 20,
  },
  leftContainer: {
    flexDirection: 'row', // Horizontal layout for user image and name
    alignItems: 'center', // Center vertically
  },
  userImage: {
    width: 50, // Adjust image size as needed
    height: 50, // Adjust image size as needed
    borderRadius: 25, // Half of the width and height for a rounded shape
  },
  userName: {
    marginLeft: 8, // Spacing between image and name
    fontWeight: 'bold',
    fontSize: 16, // Adjust font size as needed
  },
  rightContainer: {
    flex: 1, // Expand to fill available space
    marginLeft: 16, // Spacing between left and right containers
  },
  inputBar: {
    height: 40, // Adjust input height as needed
    borderWidth: 1, // Add a border or adjust as needed
    borderColor: '#ccc', // Add a border color or adjust as needed
    borderRadius: 8, // Adjust border radius as needed
    paddingHorizontal: 12, // Adjust horizontal padding as needed
  },
});
