/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import {Table, Row} from 'react-native-table-component';
import DataContent from './DataContent.json';
import {User} from '../types/UserType';
import {styles} from '../styles/UserTable';

const UserTable: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [requestData, setRequestData] = useState<Object[]>(
    Object.keys(DataContent),
  );
  const [searchResult, setSearchResult] = useState<User[]>([]);

  // ==============================================
  // in case we want to fetch remotely
  // ==============================================
  //   const [isError, setIsError] = useState<boolean>(false);
  //   const [loading, setIsLoading] = useState<boolean>(true);
  //   useEffect(() => {
  // const apiUrl =
  //   'https://drive.google.com/u/0/uc?id=1Arrezp0EPcK1gRvbbU6ZpiOABkeJ6AjI&export=download';
  // axios
  //   .get<User[]>(apiUrl)
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   .then((response: any) => {
  //     setRequestData(Object.values(response.data));
  //   })
  //   .catch(e => {
  //     console.log('error===>', e);
  //     setIsError(true);
  //   })
  //   .finally(() => setIsLoading(false));
  //   }, []);

  useEffect(() => {
    const transformed: User[] = requestData.map(
      (key: any) => (DataContent as any)[key],
    );
    const filteredUsers =
      transformed
        ?.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => b.bananas - a.bananas) ?? [];

    const bananaRankingMax =
      Math.max(...filteredUsers?.map(e => e.bananas)) ?? 1;

    const checkRank = (banaynay: number) =>
      Number((bananaRankingMax / banaynay).toPrecision(2));

    const transformeredBanaynay =
      filteredUsers?.map(e => {
        const record = e;
        record.rank = checkRank(e.bananas);
        return record;
      }) ?? [];
    setSearchResult(transformeredBanaynay);
  }, [requestData, search]);

  const tableHead = [
    '#',
    'Name',
    'Rank',
    'Number of bananas',
    'isSearchedUser',
  ];
  const tableData = searchResult
    .slice(0, 10)
    .map((item: User, index: number) => [
      index + 1,
      item.name,
      `${Number.isFinite(item.rank) ? item.rank : -1}`,
      `${item.bananas}`,
      `${item.subscribed ? 'yes' : 'no'}`,
    ]);

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image
            alt="avatar"
            source={{
              uri: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1800&t=st=1694868850~exp=1694869450~hmac=b6001a5e954b91392989d688a761f848896360cf85779fd2088a4f9678980006',
            }}
            style={styles.userImage}
            height={50}
            width={50}
          />
          <Text style={styles.userName}>John Doe</Text>
        </View>

        <View style={styles.rightContainer}>
          <TextInput
            placeholder="Search by name"
            onChangeText={text => setSearch(text)}
            style={styles.inputBar}
          />
        </View>
      </View>
      <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
        <Row
          data={tableHead}
          style={{
            backgroundColor: '#f2f2f2',
            height: 40,
            width: '100%',
          }}
          textStyle={{textAlign: 'center'}}
        />
      </Table>
      <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
        {tableData.map((rowData, index) => (
          <Row
            key={index}
            data={rowData}
            style={{height: 40, width: '100%'}}
            textStyle={{textAlign: 'center'}}
          />
        ))}
      </Table>

      {searchResult.length <= 0 && (
        <Text>
          This user name does not exist! Please specify an existing user name!
        </Text>
      )}
      {searchResult.length > 10 && (
        <Text>Users with less than 10 rank are not shown in the top 10.</Text>
      )}
    </View>
  );
};

export default UserTable;
