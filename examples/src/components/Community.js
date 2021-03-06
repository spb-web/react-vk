import React from 'react';
import { VK, Group } from 'react-vk';

const Community = () => {
  return (
    <div className="App-content">
      <h2>Community Component</h2>
      <h4>To use Community Widget:</h4>
      <pre style={{ width: '60%' }}>
        {`
import {VK, Group} from 'react-vk';

const Community = () => {
	return (
	    <VK apiId={your_api_id}>
                <Group groupId={127607773} />
            </VK>
	)
};`}
      </pre>
      <h4>Result:</h4>
      <VK apiId={6247321}>
        <Group groupId={127607773} />
      </VK>
      <h5>
        More info you can find on{' '}
        <b>
          <a href="https://vk.com/dev/widget_community">VK API</a>
        </b>
      </h5>
    </div>
  );
};

export default Community;
