import React, { useEffect, useContext } from "react";
import { Button, Container, Content, Form, Text } from "native-base";
import { useForm } from "react-hook-form";

import CustomHeader from "../../components/shared/Header";
import TextInput from "../../components/shared/TextInput";
import useYupValidationResolver from "../../utils/useYupValidationResolver";
import CustomPicker from "../../components/shared/SelectInput";
import { GlobalContext } from "../../store/contexts/globalContext";
import { beneficiarySchema } from "../../utils/yupFormSchemas";

const AddABeneficiary = ({ navigation }) => {
  const {
    state: { countries: globalCountries },
  } = useContext(GlobalContext);

  const { register, handleSubmit, control, errors, setValue } = useForm({
    defaultValues: { fullname: null, email: null, zip: null, address: null },
    reValidateMode: "onChange",
    resolver: useYupValidationResolver(beneficiarySchema),
  });

  useEffect(() => {
    register("fullname");
    register("email");
  }, [register]);

  // eslint-disable-next-line
  const onSubmit = (data) => {
    // console.log(data);
  };

  return (
    <Container>
      <CustomHeader
        showCancelBtn
        onCancel={() => navigation.goBack()}
        iconName="arrow-back"
        onPress={() => navigation.goBack()}
        screenTitle="Add a beneficiary"
      />
      <Content style={{ padding: 4 }}>
        <Form>
          <TextInput
            name="fullname"
            control={control}
            label="Full name of beneficiary"
            errors={errors}
            setValue={setValue}
            requiredMessage="Fullname is required"
          />
          <TextInput
            name="email"
            control={control}
            label="Email address of beneficiary"
            errors={errors}
            setValue={setValue}
            requiredMessage="Beneficiary email address is required"
          />
          <CustomPicker items={globalCountries} iosHeader="Please select a country" />
          <TextInput
            name="address"
            control={control}
            label="Beneficiary address"
            errors={errors}
            setValue={setValue}
            requiredMessage="Address is required"
          />
          <TextInput
            name="zip"
            control={control}
            label="Zip/Postal code"
            errors={errors}
            setValue={setValue}
            requiredMessage="Zip/Postal code is required"
          />
          <Button primary rounded block onPress={handleSubmit(onSubmit)}>
            <Text>ADD</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default AddABeneficiary;
