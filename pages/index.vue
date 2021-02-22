<template>
  <BRow>
    <BCol>
      <form id="search-form" action="">
        <BRow>
          <BCol md="12">
            <BInputGroup>
              <BFormInput
                type="text"
                placeholder="Search recipe..."
              ></BFormInput>
              <BInputGroupAppend>
                <BButton type="submit" variant="primary">
                  <FontAwesomeIcon icon="search"></FontAwesomeIcon>
                </BButton>
              </BInputGroupAppend>
            </BInputGroup>
          </BCol>
        </BRow>
      </form>
    </BCol>
  </BRow>
</template>

<script>
export default {
  name: 'Index',
}
</script>

<style scoped></style>
