package keeper

import (
	"github.com/manolaz/nft-good/x/nftgood/types"
)

var _ types.QueryServer = Keeper{}
