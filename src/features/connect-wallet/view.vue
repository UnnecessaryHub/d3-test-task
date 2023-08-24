<script lang="ts" setup="">
import {checkMetaTaskSupport} from './lib'
import {connectWalletFx} from './model'
import {$isMetataskSupported, setIsMetataskSupported} from './model'
import {useStore} from '@/shared/hooks'
import {Title} from '@/shared/ui/title'
import {$showTransition} from '@/widgets/transactions/model'
import {onMounted} from 'vue'
import {ref} from 'vue'

const loading = ref<boolean>(false)

const isMetataskSupported = useStore($isMetataskSupported)
const showTransition = useStore($showTransition)


onMounted(() => {
  setIsMetataskSupported(checkMetaTaskSupport())
})

const connectWallet = async () => {
  connectWalletFx(isMetataskSupported.value)
}

</script>

<template>
  <v-scroll-y-reverse-transition v-show="showTransition">
    <Title>
      Connect your wallet
    </Title>
  </v-scroll-y-reverse-transition>
  <v-fade-transition>
    <div class="max-w-[300px] m-center" v-show="showTransition">
      <v-btn
          :disabled="loading"
          :loading="loading"
          block
          class="text-none mb-4"
          color="indigo-darken-3"
          size="x-large"
          variant="flat"
          @click="connectWallet"
      >
        Verify and continue
      </v-btn>
    </div>
  </v-fade-transition>
</template>
