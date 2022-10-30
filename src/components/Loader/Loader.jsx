import Box from 'components/Box/Box';

const { RotatingLines } = require('react-loader-spinner');

const Loader = () => {
  return (
    <Box textAlign="center">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Box>
  );
};

export default Loader;
